import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import {
  CoverPage,
  LoginPage,
  DashboardPage,
  CreatePotluckPage,
} from "./components/pages";
import { WithNav } from "./components/elements";
import { LoginContext } from "./contexts";
import { PrivateRoute } from "./components/elements";

const App = () => {
  const { Provider } = LoginContext;

  // If there's a login token saved in localStorage, start app logged-in
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("token") === true
  );

  return (
    <>
      <Provider
        value={{ isLoggedIn, setIsLoggedIn, isLoggingIn, setIsLoggingIn }}
      >
        <Switch>
          <PrivateRoute path="/potluck/create">
            <WithNav component={<CreatePotluckPage />} />
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <WithNav component={<DashboardPage />} />
          </PrivateRoute>
          <Route path="/login" component={LoginPage} />
          <Route exact path="/" component={CoverPage} />
        </Switch>
      </Provider>
    </>
  );
};

export default App;
