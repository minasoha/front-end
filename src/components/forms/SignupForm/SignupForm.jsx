// Libraries
import React, { useState } from "react";

// Initial Form Data
const initialFormValues = {
  email: "",
  confirmEmail: "",
  password: "",
  confirmPassword: "",
};

export const SignupForm = () => {
  // State
  const [formValues, setFormValues] = useState(initialFormValues);

  // Event handlers
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const valueToUse = type === "checkbox" ? checked : value;
    setFormValues({ ...formValues, [name]: valueToUse });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newUserInfo = {
      email: formValues.email.trim(),
      password: formValues.password.trim(),
    };
    // API CALL SHOULD GO HERE WHEN READY
    console.log("FORM SUBMITTED!", newUserInfo);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
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
