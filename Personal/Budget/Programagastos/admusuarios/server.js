const express = require('express');
const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'admusuarios',
  password: 'As190182',
  port: 5432,
});

const app = express();
const port = 3000;

app.use(express.json());

app.post('/guardar_usuario', (req, res) => {
  const { firstName, lastName, email, username, password, expirationDate, neverExpire } = req.body;

  const query = `
    INSERT INTO users (first_name, last_name, email, username, password, expiration_date, never_expire)
    VALUES ($1, $2, $3, $4, $5, $6, $7)
  `;
  const values = [firstName, lastName, email, username, password, expirationDate, neverExpire];

  pool.query(query, values, (error, results) => {
    if (error) {
      console.error('Error al guardar el usuario:', error);
      res.status(500).json({ error: 'Error al guardar el usuario' });
    } else {
      console.log('Usuario guardado exitosamente');
      res.status(200).json({ message: 'Usuario guardado exitosamente' });
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
