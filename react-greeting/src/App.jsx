import { useState } from "react";

function App() {

  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("Please enter your name.");

  return (
    <div>
      <h1>React Greeting App</h1>
      <input type="text" 
      placeholder="Enter your name"
      value={name}
      onChange={(e) => setName(e.target.value)} />
      <button onClick={() => setGreeting(`Hello, ${name}. Welcome to the React Greeting App.`)}>Greet Me</button>
      <p>{greeting}</p>
    </div>
    
  );
}

export default App;
