// Libraries
import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import * as yup from "yup";
// Schemas
import schema from "./../../../schemas/signupSchema";
// Contexts
import { LoginContext } from "./../../../contexts";
// State Data
import {
  initialFormValues,
  initialFormErrors,
  initialDisabled,
} from "./initialSignupStates";

export const SignupForm = () => {
  // Destructuring/Declarations
  const { isLoggedIn } = useContext(LoginContext);
  const { push } = useHistory();

  // State
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);
  const [usernameTaken, setUsernameTaken] = useState("");

  // Validation
  const validate = async (name, value) => {
    try {
      await yup.reach(schema, name).validate(value);
      setFormErrors({ ...formErrors, [name]: "" });
    } catch (error) {
      setFormErrors({ ...formErrors, [name]: error.errors[0] });
    }
  };

  // Event handlers
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    validate(name, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Register a new user to the API
    const newUserInfo = {
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      username: formValues.username.trim(),
    };
    try {
      await axios.post(
        "https://potluckplanner-bw-10-2021.herokuapp.com/api/auth/register",
        newUserInfo
      );
      push("/login");
    } catch (error) {
      setUsernameTaken("Username already taken");
    }
  };

  // Redirect to the dashboard if logged in
  useEffect(() => {
    if (isLoggedIn) {
      push("/dashboard");
    }
  }, []);

  // Enable the submit button if form is valid
  useEffect(() => {
    const updateDisabledSubmit = async () => {
      const valid = await schema.isValid(formValues);
      setDisabled(!valid);
    };
    updateDisabledSubmit();
  }, [formValues]);

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__errors">
        <p>{usernameTaken}</p>
        <p>{formErrors.username}</p>
        <p>{formErrors.email}</p>
        <p>{formErrors.confirmEmail}</p>
        <p>{formErrors.password}</p>
        <p>{formErrors.confirmPassword}</p>
      </div>
      <label className="form__label">
        Username:
        <input
          name="username"
          value={formValues.username}
          type="text"
          placeholder="username"
          onChange={handleChange}
          className="form__text-field"
        />
      </label>
      <label className="form__label">
        Email:
        <input
          name="email"
          value={formValues.email}
          type="email"
          placeholder="Enter your email address."
          onChange={handleChange}
          className="form__text-field"
        />
      </label>
      <label className="form__label">
        Confirm Email:
        <input
          name="confirmEmail"
          value={formValues.confirmEmail}
          type="text"
          placeholder="Re-enter your email address."
          onChange={handleChange}
          className="form__text-field"
        />
      </label>

      <label className="form__label">
        Password:
        <input
          name="password"
          value={formValues.password}
          type="password"
          placeholder="Create a password."
          onChange={handleChange}
          className="form__text-field"
        />
      </label>
      <label className="form__label">
        Confirm Password:
        <input
          name="confirmPassword"
          value={formValues.confirmPassword}
          type="password"
          placeholder="Re-enter your password."
          onChange={handleChange}
          className="form__text-field"
        />
      </label>
      <button
        className="button"
        data-testid="signup-button"
        disabled={disabled}
      >
        Submit
      </button>
    </form>
  );
};

export default SignupForm;
