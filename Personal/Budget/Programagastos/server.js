const express = require('express');
const app = express();
const path = require('path');
const { Pool } = require('pg');

const port = 3000;
const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  password: 'As190182',
  database: 'programagastos'
});

// Configurar middleware para analizar el cuerpo de las solicitudes
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Ruta principal para servir el archivo HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Ejemplo de una ruta para obtener los gastos desde la base de datos
app.get('/expenses', (req, res) => {
  pool.query('SELECT * FROM gastos', (err, result) => {
    if (err) {
      console.error('Error al obtener los gastos:', err);
      res.status(500).send('Error al obtener los gastos');
    } else {
      res.json(result.rows);
    }
  });
});

// Ejemplo de una ruta para agregar gastos a la base de datos
app.post('/expenses', (req, res) => {
  const expenses = req.body;

  const query = `
    INSERT INTO gastos (fecha, destino, lugar_visitado, motivo_visita, observaciones, gasto, archivo1, archivo2, categoria, monto)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
  `;

  expenses.forEach((expense) => {
    const {
      fecha,
      destino,
      lugar_visitado,
      motivo_visita,
      observaciones,
      gasto,
      archivo1,
      archivo2,
      categoria,
      monto
    } = expense;

    const values = [
      fecha,
      destino,
      lugar_visitado,
      motivo_visita,
      observaciones,
      gasto,
      archivo1,
      archivo2,
      categoria,
      monto
    ];

    pool.query(query, values, (err) => {
      if (err) {
        console.error('Error al agregar el gasto:', err);
      }
    });
  });

  res.status(200).send('Gastos agregados correctamente');
});

// Iniciar el servidor
app.listen(port, () => {
  console.log('Servidor escuchando en el puerto', port);
});
