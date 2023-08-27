/* const largeNumber = 356;
module.exports = largeNumber;
 */



// Part 3
/* 
function getCurrentDateTime() {
    const currentDate = new Date();
    return currentDate.toLocaleString();
  }
  
  module.exports = getCurrentDateTime;

 */
  // opcion 2

  function getCurrentDateTime() {
    const currentDate = new Date();
    return currentDate.toUTCString();
  }
  
  module.exports = getCurrentDateTime;

  
  
  /* opcion 3

  


const fetch = require('node-fetch');

async function getCurrentDateTime(latitude, longitude) {
  const apiKey = 'AIzaSyBeQ-0X1sTO_zypuJg_7Nll1aC5vhW2wNo'; // Reemplaza 'TU_API_KEY' con tu propia clave de API de Google Maps
  const apiUrl = `https://maps.googleapis.com/maps/api/timezone/json?location=${latitude},${longitude}&timestamp=${Date.now() / 1000}&key=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.status === 'OK') {
      const offset = data.rawOffset + data.dstOffset;
      const currentDate = new Date(Date.now() + offset * 1000);
      return currentDate.toLocaleString();
    } else {
      throw new Error('Error al obtener la hora local.');
    }
  } catch (error) {
    console.error(error);
    throw new Error('Error al obtener la hora local.');
  }
}

module.exports = getCurrentDateTime;
 */