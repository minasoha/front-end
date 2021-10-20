// Libraries
import React, { useState } from "react";
import schema from "../../../schemas/signupSchema";
import * as yup from "yup";
import axios from "axios";

// Initial Form Data
const initialFormValues = {
  email: "",
  confirmEmail: "",
  password: "",
  confirmPassword: "",
  username: "",
};
const initialFormErrors = {
  email: "",
  confirmEmail: "",
  password: "",
  confirmPassword: "",
  username: "",
};

export const SignupForm = () => {
  // State
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);

  // Validation
  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch((err) => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
  };
  // Event handlers
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const valueToUse = type === "checkbox" ? checked : value;
    validate(name, value);
    setFormValues({ ...formValues, [name]: valueToUse });
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
      console.log(
        await axios.post(
          "https://potluckplanner-bw-10-2021.herokuapp.com/api/auth/register",
          newUserInfo
        )
      );
    } catch (error) {
      console.error("Failed to Log In:", error);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__errors">
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
          type="email"
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

      <button className="button" id="signupButton">
        Submit
      </button>
    </form>
  );
};

export default SignupForm;
