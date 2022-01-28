import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [stateVariable, setStateVariable] = useState("");

  useEffect(() => {
    fetch("/users")
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
        setStateVariable(data);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Data from express API: {stateVariable}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
