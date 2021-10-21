// Libraries
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
// Components
import App from "./App";
// Styles
import "./index.css";

// Render the frontend (in strict mode w/ SPA Routing + Redux)
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
