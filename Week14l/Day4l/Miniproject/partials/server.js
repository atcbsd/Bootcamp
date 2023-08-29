


const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const Parser = require('rss-parser');

const app = express();
const parser = new Parser();
const PORT = 3000; // Change this port number if needed

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));


// <!-- Define the routes and implement the functionality: -->

// Root route: Retrieve all facts from the RSS feed and render the posts in index.ejs
app.get('/', async (req, res) => {
  try {
    const feed = await parser.parseURL('https://thefactfile.org/feed/');

    res.render('pages/index', { feed });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Search route: Render the search page with no posts displayed
app.get('/search', (req, res) => {
  res.render('pages/search');
});

// Search by title route: Render the search page with the post matching the given title
app.post('/search/title', async (req, res) => {
  const { title } = req.body;

  try {
    const feed = await parser.parseURL('https://thefactfile.org/feed/');
    const filteredPosts = feed.items.filter(item => item.title.toLowerCase().includes(title.toLowerCase()));

    res.render('pages/search', { posts: filteredPosts });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Search by category route: Render the search page with the posts matching the given category
app.post('/search/category', async (req, res) => {
  const { category } = req.body;

  try {
    const feed = await parser.parseURL('https://thefactfile.org/feed/');
    const filteredPosts = feed.items.filter(item => item.categories.includes(category));

    res.render('pages/search', { posts: filteredPosts });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});