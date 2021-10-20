import React from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import { SignupForm, LoginForm } from "./../../forms/";

export const LoginPage = () => {
  return (
    <section data-testid="login-page" className="login-page">
      <div className="login-page__form-selector">
        <NavLink
          data-testid="login-page__signup-button"
          className="login-page__form-select-button"
          activeClassName="login-page__form-select-button active"
          to="/login/signup"
          exact
        >
          Sign Up
        </NavLink>
        <NavLink
          data-testid="login-page__login-button"
          className="login-page__form-select-button"
          activeClassName="login-page__form-select-button active"
          to="/login"
          exact
        >
          Log In
        </NavLink>
      </div>
      <Switch>
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/login/signup" component={SignupForm} />
      </Switch>
    </section>
  );
};
