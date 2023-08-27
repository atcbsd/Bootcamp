function generateSong() {
    let startNumber = document.getElementById("startNumber").value;
    let songLyrics = "";

    for (let i = startNumber; i >= 0; i--) {
        if (i === 0) {
            songLyrics += "No more bottles of beer on the wall, no more bottles of beer.<br>";
            songLyrics += "Go to the store and buy some more, 99 bottles of beer on the wall.";
        } else if (i === 1) {
            songLyrics += "1 bottle of beer on the wall, 1 bottle of beer.<br>";
            songLyrics += "Take it down and pass it around, no more bottles of beer on the wall.<br><br>";
        } else {
            songLyrics += i + " bottles of beer on the wall, " + i + " bottles of beer.<br>";
            songLyrics += "Take " + (i === 2 ? "1" : i-1) + " down and pass them around, ";
            songLyrics += (i === 2 ? "1" : i-1) + " bottle" + ((i === 2 ? "": "s") + " of beer on the wall.<br><br>");
          }
        }


    document.getElementById("songLyrics").innerHTML = songLyrics;
}

// La función generate song toma el valor que se ingresa en el input en la variable start number,
// y crea una variable sin texto para poder remplazarla con lo que se genere en la función dependiendo de la cantidad que se ingresó arriba
// Se utiliza un for loop que empieza con startNumber y va decrementando en una unidad hasta que llega a 0. 
// Adentro del for loop revisa si el numero es 0. Si sí es, appends el texto correspondiente al final de la canción, si no es 0 revisa si el número es 1. 
// en caso de ser 1 appends el texto crrespondiente para el penúltimo párrafo de la canción. 
// Si no es ni cero ni uno entonces pone el texto correspondiente para todos los demás párrafos. 
// La variable que se creó al principio que ahora contiene toda la canción completa se agrega usando innerHTML y de esa forma se imprime. 