React Hooks are a feature introduced in React 16.8 that allow you to use state and other React features without writing a class. Hooks provide a more concise and flexible way to manage state and side effects in functional components.

There are several built-in React Hooks, but two of the most commonly used ones are useState and useEffect.

React Hooks provide a simpler and more declarative way to manage state and perform side effects in functional components. They eliminate the need for class components and provide a more intuitive and concise syntax for handling complex logic in React applications.



useState: The useState hook allows functional components to have state variables. It takes an initial value as a parameter and returns an array with two elements: the current state value and a function to update that value.

Example 1:

import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

In this example, count is a state variable initialized to 0. The setCount function is used to update the value of count when the "Increment" button is clicked.



Example 2: Handling User Input

import React, { useState } from 'react';

function InputHandler() {
  const [text, setText] = useState('');

  const handleChange = event => {
    setText(event.target.value);
  };

  return (
    <div>
      <h2>Input Handler</h2>
      <input type="text" value={text} onChange={handleChange} />
      <p>Typed Text: {text}</p>
    </div>
  );
}


Explanation: This example demonstrates handling user input using the useState hook. The text state variable stores the current input value. The handleChange function updates the text state whenever the input value changes.



Example 3: Toggling a Component

import React, { useState } from 'react';

function ToggleComponent() {
  const [visible, setVisible] = useState(true);

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  return (
    <div>
      <h2>Toggle Component</h2>
      <button onClick={toggleVisibility}>Toggle</button>
      {visible && <p>Visible Content</p>}
    </div>
  );
}

Explanation: This example demonstrates toggling the visibility of a component using the useState hook. The visible state variable is initially set to true. Clicking the "Toggle" button calls the toggleVisibility function, which toggles the value of visible using the setVisible function.






useEffect: The useEffect hook allows you to perform side effects in functional components, such as fetching data, subscribing to events, or manipulating the DOM. It accepts two arguments: a function that contains the side effect, and an optional dependency array that specifies when the effect should be re-run.
Example:



Example 1: Logging Function Execution

import React, { useEffect } from 'react';

function FunctionLogger() {
  useEffect(() => {
    console.log('Function executed!');
  }, [handleClick]);


  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}


Solution: In this example, we have a component FunctionLogger that logs a message every time it renders or re-renders. It logs the message 'Function executed!' to the console.

Additionally, there's a button with an onClick event handler called handleClick. When the button is clicked, it executes the handleClick function, which alerts the message 'Button clicked!'.




Example 1: Displaying a Counter



import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]); // Re-run the effect whenever `count` changes

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default Counter;



import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div>
      <h2>Counter</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

Explanation: This example demonstrates a simple counter component. The useState hook is used to create a count state variable and the setCount function to update it. The useEffect hook is used to update the document title whenever the count state changes.




Example 2: Timer

import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <p>Seconds: {seconds}</p>
    </div>
  );
}

Explanation: This example creates a timer that increments the seconds state variable every second. The effect sets up an interval using setInterval to update the state, and the cleanup function clears the interval using clearInterval when the component is unmounted.



Example 3: Fetching Data from an API

import React, { useState, useEffect } from 'react';

function DataFetcher() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h2>Data Fetcher</h2>
      <ul>
        {data.map(item => <li key={item.id}>{item.name}</li>)}
      </ul>
    </div>
  );
}




The component DataFetching initializes a state variable called data using the useState hook.
The useEffect hook is used to fetch data from an API when the component mounts (since the dependency array is empty). It makes an HTTP GET request to the specified API endpoint.
Once the data is fetched, the state is updated using the setData function.
The fetched data is rendered in a list.

This example demonstrates fetching data from an API using the fetch function inside the useEffect hook. The initial value of data state is an empty array. Once the API response is received, the data state is updated using the setData function.


In this example, useEffect is used to fetch data from an API when the component mounts. The empty dependency array [] ensures that the effect runs only once. The fetched data is stored in the data state variable using the setData function.




USE EFFECT WITH AXIOS: (npm install axios)

import React, { useEffect, usestate } from "react";
import axios from "axios";

function EffectTutorial() {
  const [data, setData] = useState("");

  useEffect(() => {
    axios
    .get("https://jsonplaceholder.typicode.com/comments")
    .then(response) => {
      setData(response.data[0].email);
      console.log("API WAS CALLED");
    });
  }, []);

  return <div> Hello {data} </div>
}

export default EffectTutorial;






USE EFFECT WITH AXIOS: (npm install axios) EXERCISE 2



import React, { useEffect, usestate } from "react";
import axios from "axios";

function EffectTutorial() {
  const [data, setData] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios
    .get("https://jsonplaceholder.typicode.com/comments")
    .then(response) => {
      setData(response.data[0].email);
      console.log("API WAS CALLED");
    });
  }, [count]);

  return (
    <div>
    Hello
    <h1>{data}</h1>
    <h1>{count}</h1>
    <button
    onClick={() => {
      setCount(count + 1);
    }}
    >
    Click
    </button>
    </div>
  );
}

export default EffectTutorial;