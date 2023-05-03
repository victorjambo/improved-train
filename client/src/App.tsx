import React, { useCallback, useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const url = process.env.BACKEND_API || "http://localhost:4000/";

const App = () => {
  const [message, setMessage] = useState("");
  const fetchAPI = useCallback(async () => {
    await fetch(url)
      .then((res) => res.json())
      .then((res) => setMessage(res.message))
      .catch((err) => console.log({ err }));
  }, []);

  useEffect(() => {
    void fetchAPI();
  }, [fetchAPI]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {message || "Learn React"}
        </a>
      </header>
    </div>
  );
};

export default App;
