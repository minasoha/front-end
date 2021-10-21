// Libraries
import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import * as yup from "yup";
// Schemas
import schema from "../../../schemas/loginSchema";
// Contexts
import { LoginContext } from "../../../contexts";

// Initial Form Data
const initialFormValues = {
  username: "",
  password: "",
};
const initialFormErrors = {
  username: "",
  password: "",
};
const initialDisabled = true;

export const LoginForm = () => {
  // Destructuring/Declarations
  const { push } = useHistory();
  const { isLoggedIn, setIsLoggedIn } = useContext(LoginContext);

  // State
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);
  const [submitError, setSubmitError] = useState("");

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
    const { name, value } = e.target;
    validate(name, value);
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Place userInfo in object
    const userInfo = {
      username: formValues.username,
      password: formValues.password,
    };
    try {
      // Make an API call
      const loginData = await axios.post(
        "https://potluckplanner-bw-10-2021.herokuapp.com/api/auth/login",
        userInfo
      );
      console.log(loginData);
      // Save login token to localStorage
      localStorage.setItem("token", loginData.data.token);
      // Update global logged in state and clear submit error
      setIsLoggedIn(true);
      setSubmitError("");
      // Redirect to dashboard
      push("/dashboard");
    } catch (error) {
      // Show the authentication error
      setSubmitError("Could not authenticate user! Please try again, later.");
    }
  };

  useEffect(() => {
    schema.isValid(formValues).then((valid) => setDisabled(!valid));
  }, [formValues]);

  // Redirect to dashboard if already logged in
  useEffect(() => {
    if (isLoggedIn) {
      push("/dashboard");
    }
  }, []);

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__errors">
        <p>{formErrors.username}</p>
        <p>{formErrors.password}</p>
        <p>{submitError}</p>
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
      <button className="button" data-testid="login-button" disabled={disabled}>
        Submit
      </button>
    </form>
  );
};

export default LoginForm;
