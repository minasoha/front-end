// Libraries
import React, { useState, useEffect } from "react";
import schema from "../../../schemas/signupSchema";
import * as yup from "yup";

// Initial Form Data
const initialFormValues = {
  email: "",
  confirmEmail: "",
  password: "",
  confirmPassword: "",
};
const initialFormErrors = {
  email: "",
  confirmEmail: "",
  password: "",
  confirmPassword: "",
};
const initialDisabled = true;

export const SignupForm = () => {
  // State
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

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
    setFormValues({ ...formValues, [name]: valueToUse });
    validate(name, value);
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

  useEffect(() => {
    schema.isValid(formValues).then((valid) => setDisabled(!valid));
  }, [formValues]);

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__errors">
        <p>{formErrors.email}</p>
        <p>{formErrors.confirmEmail}</p>
        <p>{formErrors.password}</p>
        <p>{formErrors.confirmPassword}</p>
      </div>
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

      <button className="button" id="signupButton" disabled={disabled}>
        Submit
      </button>
    </form>
  );
};

export default SignupForm;
