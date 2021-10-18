// Libraries
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
// Reducers
import { reducer } from "./reducers";
// Components
import App from "./App";
// Styles
import "./styles/index.css";

// Create redux store (w/ logger + thunk middleware)
const reduxStore = createStore(reducer, applyMiddleware(logger, thunk));

// Render the frontend (in strict mode w/ SPA Routing + Redux)
ReactDOM.render(
  <React.StrictMode>
    <Provider store={reduxStore}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
