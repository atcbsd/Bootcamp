const express = require('express');
const app = express();
const path = require('path');

// Configurar middleware para analizar el cuerpo de las solicitudes
app.use(express.urlencoded({ extended: true }));

// Variable para almacenar la lista de compras
const shoppingList = [];

// Ruta principal para servir el archivo HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Ruta para agregar un artículo a la lista de compras
app.post('/addItem', (req, res) => {
  const { item, amount } = req.body;
  shoppingList.push({ item, amount });
  res.redirect('/list');
});

// Ruta para mostrar la lista de compras
app.get('/list', (req, res) => {
  let listItems = '';
  for (const item of shoppingList) {
    listItems += `<li>${item.amount} ${item.item}</li>`;
  }
  res.send(`
    <h1>Shopping List Items</h1>
    <ul>${listItems}</ul>
  `);
});

// Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
