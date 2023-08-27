const express = require('express');
const app = express();
const path = require('path');
const { Pool } = require('pg');

// Configura el middleware para analizar el cuerpo de la solicitud
app.use(express.urlencoded({ extended: true }));

// Crea un nuevo cliente de PostgreSQL
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'shopping_list',
  password: 'As190182',
  port: 5432, // o tu puerto de PostgreSQL
});

// Sirve el archivo HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Maneja el envío del formulario y guarda el elemento en la lista de compras
app.post('/addItem', (req, res) => {
  const { item, amount } = req.body;
  const query = 'INSERT INTO shopping_list (item, amount) VALUES ($1, $2)';
  const values = [item, amount];
  pool.query(query, values, (error, result) => {
    if (error) {
      console.error('Error al insertar el elemento:', error);
      res.send('Error al insertar el elemento en la base de datos');
    } else {
      res.redirect('/list');
    }
  });
});

// Muestra los elementos de la lista de compras
app.get('/list', (req, res) => {
  const query = 'SELECT * FROM shopping_list';
  pool.query(query, (error, result) => {
    if (error) {
      console.error('Error al recuperar los elementos:', error);
      res.send('Error al recuperar los elementos de la base de datos');
    } else {
      const items = result.rows;
      let listItems = '';
      for (const item of items) {
        listItems += `<li>${item.amount} ${item.item}</li>`;
      }
      res.send(`
        <h1>Elementos de la lista de compras</h1>
        <ul>${listItems}</ul>
      `);
    }
  });
});

// Filtrar los elementos de la lista de compras
app.get('/filteredResults', (req, res) => {
  const { item, amount } = req.query;
  let query = 'SELECT * FROM shopping_list';

  // Agregar condiciones de filtrado si se especificaron valores
  if (item || amount) {
    query += ' WHERE';
    if (item) {
      query += ` item = '${item}'`;
    }
    if (item && amount) {
      query += ' AND';
    }
    if (amount) {
      query += ` amount = ${amount}`;
    }
  }

  pool.query(query, (error, result) => {
    if (error) {
      console.error('Error al recuperar los elementos filtrados:', error);
      res.status(500).send('Error al recuperar los elementos filtrados de la base de datos');
    } else {
      const filteredItems = result.rows;
      res.json(filteredItems);
    }
  });
});

// Muestra los elementos de la lista de compras con filtrado opcional
app.get('/list', (req, res) => {
    const { item, amount } = req.query;
    let query = 'SELECT * FROM shopping_list';
  
    if (item && amount) {
      // Si se especifica tanto el elemento como la cantidad, aplicar el filtrado
      query += ` WHERE item = '${item}' AND amount = ${amount}`;
    } else if (item) {
      // Si solo se especifica el elemento, aplicar el filtrado por elemento
      query += ` WHERE item = '${item}'`;
    } else if (amount) {
      // Si solo se especifica la cantidad, aplicar el filtrado por cantidad
      query += ` WHERE amount = ${amount}`;
    }
  
    pool.query(query, (error, result) => {
      if (error) {
        console.error('Error al recuperar los elementos:', error);
        res.send('Error al recuperar los elementos de la base de datos');
      } else {
        const items = result.rows;
        let listItems = '';
        for (const item of items) {
          listItems += `<li>${item.amount} ${item.item}</li>`;
        }
        res.send(`
          <h1>Elementos de la lista de compras</h1>
          <ul>${listItems}</ul>
        `);
      }
    });
  });
  

// Configuración y middleware adicional

// Iniciar el servidor
const port = 3002;
app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});
