import { useState } from "react";

function App() {
  const a = 5;
  let message;

  const[count, setCount] = useState(0);

  const isLoggedIn = true;
   if(isLoggedIn === true) 
      {
        message = "Welcome Back!"
      }
      else {
        message = "Please log in."
      }
      
  return (
    <div>
    <h1>Hello, React!</h1>
      <p>a is equal to {a}</p>

      <p>{message}</p>

      <h2>{isLoggedIn ? "Welcome" : "Please Login."}</h2>

      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

      <button onClick={() => setCount(count - 1)}>
        decrease
      </button>

      <button onClick={() => setCount(0)}>
        reset
      </button>

      </div>
  );

}
export default App;
