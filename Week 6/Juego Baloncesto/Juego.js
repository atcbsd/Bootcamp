// Obtiene el canvas del HTML
let canvas = document.getElementById("canvas");

// Define el contexto 2D
var ctx = canvas.getContext("2d");

// Crea el objeto de la pelota
let ball = {
    x: canvas.width/2,
    y: canvas.height/2,
    radius: 10,
    color: "red",
    dx: 2,
    dy: -2
};

// Dibuja la pelota
function drawBall() {
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI*2);
    ctx.fillStyle = ball.color;
    ctx.fill();
    ctx.closePath();
}

// Mueve la pelota
function moveBall() {
    ball.x += ball.dx;
    ball.y += ball.dy;
    
    // Rebota la pelota en los bordes del canvas
    if (ball.x + ball.radius > canvas.width || ball.x - ball.radius < 0) {
        ball.dx = -ball.dx;
    }
    if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
        ball.dy = -ball.dy;
    }
}

// Dibuja el juego
function draw() {
    // Borra el canvas antes de dibujar
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Dibuja la pelota
    drawBall();
    
    // Mueve la pelota
    moveBall();
}

// Inicia el juego
setInterval(draw, 10);
