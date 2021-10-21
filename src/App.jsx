import React, { useEffect, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user_id, setUser_id] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLoggedIn(true);
      setUser_id(localStorage.getItem("user_id"));
    }
  }, []);

  return (
    <>
      <Provider value={{ isLoggedIn, setIsLoggedIn, user_id }}>
        <Switch>
          <PrivateRoute path="/potluck/create">
            <WithNav component={<CreatePotluckPage />} />
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <WithNav component={<DashboardPage />} />
          </PrivateRoute>
          <Route path="/login">
            {isLoggedIn ? <Redirect to="/dashboard" /> : <LoginPage />}
          </Route>
          <Route exact path="/">
            {isLoggedIn ? <Redirect to="/dashboard" /> : <CoverPage />}
          </Route>
        </Switch>
      </Provider>
    </>
  );
};

export default App;
