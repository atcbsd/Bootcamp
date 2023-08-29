// 🌟 Exercise 1: Conversion
// Instructions
// Convert the below promise into async await:

// fetch("https://www.swapi.tech/api/starships/9/")
//     .then(response => response.json())
//     .then(objectStarWars => console.log(objectStarWars.result));


async function fetchStarship() {
    try {
        const response = await fetch("https://www.swapi.tech/api/starships/9/") 
        const objectStarWars = await response.json()
    console.log(objectStarWars.result)
    } catch (error) {
        console.error(error)
    }
}
fetchStarship()

// 🌟 Exercise 2: Analyze
// Instructions
function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall(); // The result will be calling and then resolved, because we are setting a timeout of 2 seconds in the first function. 