// Libraries
import React, { useState } from "react";
import schema from "../../../schemas/loginSchema";

import * as yup from "yup";

// Initial Form Data

const initialFormValues = {
  email: "",
  password: "",
};
const initialFormErrors = {
  email: "",
  password: "",
};

export const LoginForm = () => {
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

  //Event handlers
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const valueToUse = type === "checkbox" ? checked : value;
    validate(name, value);
    setFormValues({ ...formValues, [name]: valueToUse });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues.email);
    // Axios Call
    // .then - setLoggedIn to true
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__errors">
        <p>{formErrors.email}</p>
        <p>{formErrors.password}</p>
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
        Password:
        <input
          name="password"
          value={formValues.password}
          type="password"
          placeholder="Enter your password."
          onChange={handleChange}
          className="form__text-field"
        />
      </label>
      <button className="button" id="loginButton">
        Submit
      </button>
    </form>
  );
};

export default LoginForm;
