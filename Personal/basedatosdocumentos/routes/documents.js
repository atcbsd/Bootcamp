const express = require('express');
const router = express.Router();
const multer = require('multer');

// Configura multer para manejar la carga de archivos
cconst upload = multer({ dest: 'documents/upload/' });

router.post('/upload', upload.array('files'), (req, res) => {
  const productName = req.body.productName;
  const files = req.files;

  // Procesa el nombre del producto y los archivos de acuerdo a tus necesidades
  // ...

  res.redirect('/');
});

module.exports = router;
