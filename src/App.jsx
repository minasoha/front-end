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
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("token") ? true : false
  );

  return (
    <>
      <Provider value={{ isLoggedIn, setIsLoggedIn }}>
        <Switch>
          <PrivateRoute
            path="/potluck/create"
            component={() => <WithNav component={<CreatePotluckPage />} />}
          />
          <PrivateRoute
            path="/dashboard"
            component={() => <WithNav component={<DashboardPage />} />}
          />
          <Route path="/login" component={LoginPage} />
          <Route exact path="/" component={CoverPage} />
        </Switch>
      </Provider>
    </>
  );
};

export default App;
