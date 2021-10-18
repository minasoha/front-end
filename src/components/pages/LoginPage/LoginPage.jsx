import React, { useState } from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import Signup from "../../forms/signupForm";

const initialFormValues = {
  email: '',
  confirmEmail: '',
  password: '',
  confirmPassword: '',
}

export const LoginPage = () => {

  const [formValues, setFormValues] = useState(initialFormValues);

  const change = (name, value) => {
    setFormValues({ ...formValues, [name]: value})
  }

  const submit = () => {
    const newSignup = {
      email: formValues.email.trim(),
      password: formValues.password.trim()
    }
    // leading to a POST (i assume!)
  }

  return (
    <section data-testid="login-page" className="login-page">
      <div className="login-page__form-selector">
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
          <Signup values={formValues} change={change} submit={submit} />
        </Route>
      </Switch>
    </section>
  );
};
