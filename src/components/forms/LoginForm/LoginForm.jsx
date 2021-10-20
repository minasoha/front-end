// Libraries
import React, { useState } from "react";
import schema from "../../../schemas/loginSchema";

import * as yup from "yup";
import axios from "axios";

// Initial Form Data

const initialFormValues = {
  username: "",
  password: "",
};
const initialFormErrors = {
  username: "",
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Send login request to api
    const userInfo = {
      username: formValues.username,
      password: formValues.password,
    };
    try {
      console.log(
        await axios.post(
          "https://potluckplanner-bw-10-2021.herokuapp.com/api/auth/login",
          userInfo
        )
      );
    } catch (error) {
      console.log("Login Failure", error);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__errors">
        <p>{formErrors.username}</p>
        <p>{formErrors.password}</p>
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
        Password:
        <input
          name="password"
          value={formValues.password}
          type="password"
          placeholder="password"
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
