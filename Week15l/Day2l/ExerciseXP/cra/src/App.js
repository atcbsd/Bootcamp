// EXERCISE XP 

// import React from "react" 
// import {UserFavoriteAnimals} from "./components/FavoriteAnimals"



// XP EXERCISE 1
// function App(){
//   return (
//     <h1>We do not use JSX</h1>
//   )
// }

// export default App // cuando tenemos el export default app, no hay que poner los corchetes en donde estemos importando 

// cuando no tengamos la palabra defalut hay que poner los corchetes en donde lo estemos importando 

// XP EXERCISE 2: WITH JSX 
// export default function App() {
//   const myelement = <h1>Hello World!</h1>
//   return myelement
// }

// export default function App() {
//   const sum = 5+5
//   const myelement = <h1>React is {sum} times better with JSX!</h1>
//   return myelement
// }

// export default function App() {
//   const sum = 5+5
//    return <h1>React is {sum} times better with JSX!</h1>
// }

// export default function App(){
//   return (
//     <>
//       <h3>Hello</h3>
//       <h3>Alexis</h3>
//     </>
//   )
// }

// XP EXERCISE 3: OBJECT
//PART 1

// export default function App() {
//   const user = {
//     firstName: 'Bob',
//     lastName: 'Dylan',
//     favAnimals : ['Horse','Turtle','Elephant','Monkey']
//   }
//   return (
//     <>
//     <h3>{user.firstName}</h3>
//     <h3>{user.lastName}</h3>
//     <UserFavoriteColors/>
//     </>
//   )
// }

// function UserFavoriteColors(){
//   return <p>favorite colors</p>
// }

// PART 2
// export default function App() {
//   const user = {
//     firstName: 'Bob',
//     lastName: 'Dylan',
//     favAnimals : ['Horse','Turtle','Elephant','Monkey']
//   }
//   return (
//     <>
//     <h3>{user.firstName}</h3>
//     <h3>{user.lastName}</h3>
//     <UserFavoriteAnimals favorites = {user.favAnimals}/>
//     </>
//   )
// }

// function UserFavoriteAnimals (props){
//   const favorites = props.favorites
//   return <p>{favorites}</p>
// }

// PART 3

// export default function App() {
//   const user = {
//     firstName: 'Bob',
//     lastName: 'Dylan',
//     favAnimals : ['Horse','Turtle','Elephant','Monkey']
//   }
//   return (
//     <>
//     <h3>{user.firstName}</h3>
//     <h3>{user.lastName}</h3>
//     <UserFavoriteAnimals favorites = {user.favAnimals}/>
//     </>
//   )
// }


// function UserFavoriteAnimals (props){
//   const favorites = props.favorites
//   // return favorites.map((favorite) => <li>{favorite}</li>) // con esta opción te marca error en el console log porque necesitamos asignarle un key a cada componente
//   return favorites.map((favorite, i) => <li key={i}>{favorite}</li>)
// }

//Destructuring

// function UserFavoriteAnimals(props){
//   const {favorites} = props; 
//   return favorites.map((favorite, i) => <li key={i}>{favorite}</li>);
// }



//More Destructuring

    // function UserFavoriteAnimals {favorites}){
    //   return favorites.map((favorite, i) => <li key={i}>{favorite}</li>);
    // }


    //More Destructuring with arrow function
    // We can also eliminate curly braces before return and return since it is only one element

    // const UserFavoriteAnimals = ({favorites}) => {
    //   return favorites.map((favorite, i) => <li key={i}>{favorite}</li>);
    // }

// XP EXERCISE 4

// import React from "react" 
// import {Exercise4} from "./components/Exercise4"

// export const App = () => {
//   return(
//     <div>
//       <Exercise4/> 
//     </div>

//   )
 
// }


// DAILY CHALLENGE 

import React from "react" 
import {DemoCarousel} from "./components/DemoCarousel"

export const App = () => {
  return(
    <div>
      <DemoCarousel/> 
    </div>

  )
 
}