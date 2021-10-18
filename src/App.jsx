import React from "react";
import { Switch, Route } from "react-router-dom";
import { Navbar } from "./components/elements";
import { CoverPage } from "./components/pages";
import Dashboard from "./components/pages/DashboardPage";
const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Switch>
        <Dashboard />
        <Route path="/">
          <CoverPage />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
