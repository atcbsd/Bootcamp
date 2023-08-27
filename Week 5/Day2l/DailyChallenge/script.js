// Instructions
// In this exercise we will be creating a webpage with a black background as the universe and we will fill the universe with planets and their moons.
// We will provide the HTML page.
// You only have to work with a JS file.

// Create an array which value is the planets of the solar system.
// For each planet in the array, create a <div> using createElement. This div should have a class named "planet".
// Each planet should have a different background color. (Hint: you could add a new class to each planet - each class containing a different background-color).
// Finally append each div to the <section> in the HTML (presented below).
// Bonus: Do the same process to create the moons.
// Be careful, each planet has a certain amount of moons. How should you display them?
// Should you still use an array for the planets ? Or an array of objects ?

let planets = [
    {name: "Mercury", moons: 0},
    {name: "Venus", moons: 0},
    {name: "Earth", moons: 1},
    {name: "Mars", moons: 2},
    {name: "Jupiter", moons: 67},
    {name: "Saturn", moons: 62},
    {name: "Uranus", moons: 27},
    {name: "Neptune", moons: 14}
];

const listPlanets = document.querySelector('.listPlanets');

planets.forEach(planet => {
    let planetDiv = document.createElement('div');
    planetDiv.classList.add('planet', planet.name.toLowerCase());
    listPlanets.appendChild(planetDiv);

    for (let i = 1; i <= planet.moons; i++) {
        let moonDiv = document.createElement('div');
        moonDiv.classList.add('moon', planet.name.toLowerCase());
        let moveMoon = (90 + (i * 30)) + 'px';
        moonDiv.style.left = moveMoon;
        planetDiv.appendChild(moonDiv);
    }
});

//animation property accepts four values:
//bounce - a custom animation name.
//2s - duration of the animation. In this case, the animation will run for 2 seconds.
//ease-in-out - specifies the timing function to be used for the animation.
//It determines how fast the animation progresses at different points within the
//animation. The ease-in-out function starts slow, speeds up in the middle, and
//slows down again at the end. This gives the animation a more natural feel.
//infinite alternate - specifies the number of times the animation should repeat
//and the direction of the animation. infinite means the animation will repeat
//indefinitely, and alternate means that the animation will reverse direction on
//every other cycle. This creates the bouncing effect.
//instead of ease-in-out. Here are a few examples:
// ease-in: The animation starts slowly and speeds up towards the end.
// ease-out: The animation starts quickly and slows down towards the end.
// linear: The animation progresses at a constant rate from beginning to end.
// steps(n): The animation jumps in n steps between the starting and ending points.
// cubic-bezier(x1, y1, x2, y2): A custom timing function
// that allows you to specify the speed of the animation at different points in time.
// CSS animation alternatives to infinite alternate:
// infinite: The animation repeats indefinitely without reversing.
// forwards: The animation retains the styles applied in the last keyframe after
// it completes.
// backwards: The animation applies the styles from the first keyframe before the
// animation starts.
// both: The animation applies both forwards and backwards styles.
// 3s: The animation runs for a specified duration of time before ending.
// 2s ease-in-out: The animation uses a different timing function or duration
// than ease-in-out.