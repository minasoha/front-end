import React from "react";
import { Switch, Route } from "react-router-dom";
import { CoverPage, LoginPage } from "./components/pages";

const App = () => {
  return (
    <div className="app">
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/" component={CoverPage} />
      </Switch>
    </div>
  );
};

export default App;
