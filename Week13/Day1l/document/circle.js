const calculateCricleArea = (radius) => {
    const area = Math.PI * radius **2
    const resultElement = document.getElementById('result')
    resultElement.textContent = `The area of the circle with a radius of ${radius} is ${area.toFixed(2)}.`
    
}

export default calculateCricleArea