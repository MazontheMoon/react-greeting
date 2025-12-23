import { useState } from "react";

function App() {
  //variables
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("Please enter your name.");

  //functions
  const handleClick = () => {
    setGreeting(`Hello, ${name}! Welcome to the React Greeting App.`);
  };

  return (
    <div className="container-fluid min-vh-100 d-flex flex-column justify-content-center align-items-center">
      <div
        className="card p-3 text-center"
        style={{ maxWidth: "500px", width: "100%" }}
      >
        <h1 className="mb-3">React Greeting App</h1>

        <div className="d-flex justify-content-between mx-2">
          <input
            type="text"
            placeholder="Enter your name"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button
            className="btn btn-primary flex-shrink-0 mx-2"
            onClick={handleClick}
          >
            Greet Me
          </button>
        </div>

        <p className="align-self-start m-2">{greeting}</p>
      </div>
    </div>
  );
}

export default App;
