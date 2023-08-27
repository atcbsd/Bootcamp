const express = require('express')
const app = express()
const path = require('path') 

app.use(express.urlencoded({extended: true}))

let shoppingList = []

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.post('/addItem', (req, res) => {
    const {item, amount} = req.body
    shoppingList.push({item, amount})
    res.redirect('/list')
})

app.get('/list', (req, res) => {
    let listItems = ''
    for (const item of shoppingList) {
        listItems += `<li>${item.amount} ${item.item}</li>`
    }
    res.send(`
    <h1>Shopping List Items</h1>
    <ul>${listItems}</ul>
    `
    )
})

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
  });

// const express = require('express')
// const app = express()
// const path = require('path')

// app.use(express.urlencoded({extended: true}))

// let shoppingList = []

// app.get('/', (req, res) => {
//     let listItems = ''
//     for (const item of shoppingList) {
//         listItems += `<li>${item.amount} ${item.item}</li>`
//     }

//     res.send(`
//     <style>
//         body {
//             font-family: Arial, sans-serif;
//             text-align: center;
//         }
        
//         h1 {
//             color: #333;
//         }
        
//         form {
//             margin-top: 20px;
//         }
        
//         label {
//             display: block;
//             margin-bottom: 5px;
//         }
        
//         input[type="text"],
//         input[type="number"] {
//             padding: 5px;
//             width: 200px;
//             margin-bottom: 10px;
//         }
        
//         input[type="submit"] {
//             padding: 5px 15px;
//             background-color: #4caf50;
//             color: white;
//             border: none;
//             cursor: pointer;
//         }
        
//         ul {
//             padding: 0;
//             list-style-type: none;
//             text-align: left;
//             margin: 20px auto;
//             max-width: 400px;
//         }
        
//         ul li {
//             margin-bottom: 5px;
//         }
//     </style>
//     <h1>Shopping List</h1>
//     <form action="/addItem" method="POST">
//         <label for="item">Item:</label>
//         <input type="text" id="item" name="item" required>
//         <label for="amount">Amount:</label>
//         <input type="text" id="amount" name="amount" required>
//         <button type="submit">Add Item</button>
//     </form>
//     <h2>Shopping List Items</h2>
//     <div id="output">
//         <ul>${listItems}</ul>
//     </div>
    
//     <script>
//         function deleteItems() {
//             const shoppingList = document.getElementById('shopping-list');
//             while (shoppingList.firstChild) {
//                 shoppingList.removeChild(shoppingList.firstChild);
//             }
//         }
//     </script>
//     `)
// })

// app.post('/addItem', (req, res) => {
//     const {item, amount} = req.body
//     shoppingList.push({item, amount})
//     res.redirect('/')
// })

// app.listen(3000, () => {
//     console.log('Server is running on http://localhost:3000');
// });