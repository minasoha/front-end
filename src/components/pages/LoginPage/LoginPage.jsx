import React from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import CreatePotluckPage from "../CreatePotluckPage/CreatePotluckPage";
export const LoginPage = () => {
  return (
    <section data-testid="login-page" className="login-page">
      <div className="login-page__form-selector">

      <CreatePotluckPage/>
        <NavLink
          data-testid="login-page__signup-button"
          className="login-page__form-select-button"
          to="/login/signup"
        >
          Sign Up
        </NavLink>
        <NavLink
          data-testid="login-page__login-button"
          className="login-page__form-select-button"
          to="/login"
        >
          Log In
        </NavLink>
      </div>
      <Switch>
        <Route exact path="/login">
          {/* Login Form Component Goes Here */}
        </Route>
        <Route exact path="/login/signup">
          {/* Signup Form Component Goes Here */}
        </Route>
      </Switch>
    </section>
  );
};
