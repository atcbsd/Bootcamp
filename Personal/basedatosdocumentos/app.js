const express = require('express');
const multer = require('multer');

const app = express();

// Configuración de Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'documents/upload'); // Ruta de destino para guardar los archivos
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Utiliza el nombre original del archivo
  },
});

const upload = multer({ storage });

// Ruta para cargar archivos
app.post('/documents/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No se ha seleccionado ningún archivo.');
  }

  res.send('Archivo cargado correctamente.');
});

// Iniciar el servidor
app.listen(3000, () => {
  console.log('Servidor en ejecución en http://localhost:3000');
});
