import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import { CoverPage, LoginPage, DashboardPage } from "./components/pages";
import { LoginContext } from "./contexts";

const App = () => {
  const { Provider } = LoginContext;

  // If there's a login token saved in localStorage, start app logged-in
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("token") ? true : false
  );

  return (
    <div className="app">
      <Provider value={{ isLoggedIn, setIsLoggedIn }}>
        <Switch>
          <Route path="/dashboard" component={DashboardPage} />
          <Route path="/login" component={LoginPage} />
          <Route exact path="/" component={CoverPage} />
        </Switch>
      </Provider>
    </div>
  );
};

export default App;
