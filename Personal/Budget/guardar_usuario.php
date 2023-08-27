<?php
// Obtener los datos del usuario enviados desde el formulario
$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$username = $_POST['username'];
$password = $_POST['password'];
$expirationDate = $_POST['expirationDate'];
$neverExpire = $_POST['neverExpire'];

// Realizar las validaciones y verificaciones necesarias aquí

// Conectar a la base de datos (reemplaza los valores con tus propias credenciales)
$servername = 'localhost';
$username_db = 'tu_usuario';
$password_db = 'tu_contraseña';
$dbname = 'nombre_de_tu_basededatos';

$conn = new mysqli($servername, $username_db, $password_db, $dbname);

// Verificar la conexión a la base de datos
if ($conn->connect_error) {
    die('Error de conexión: ' . $conn->connect_error);
}

// Preparar y ejecutar la consulta para insertar los datos del usuario en la tabla correspondiente
$stmt = $conn->prepare('INSERT INTO usuarios (nombre, apellido, usuario, contraseña, fecha_caducidad, no_caduca) VALUES (?, ?, ?, ?, ?, ?)');
$stmt->bind_param('sssssi', $firstName, $lastName, $username, $password, $expirationDate, $neverExpire);
$stmt->execute();

// Verificar si la inserción fue exitosa
if ($stmt->affected_rows > 0) {
    echo 'El usuario se ha guardado exitosamente.';
} else {
    echo 'Error al guardar el usuario.';
}

// Cerrar la conexión y liberar recursos
$stmt->close();
$conn->close();
?>
