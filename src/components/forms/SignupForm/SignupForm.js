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
    <form onSubmit={handleSubmit}>
      <div className="emailContainer">
        Email:
        <input
          name="email"
          value={formValues.email}
          type="email"
          placeholder="Enter your email address."
          onChange={handleChange}
        />
        Confirm Email:
        <input
          name="confirmEmail"
          value={formValues.confirmEmail}
          type="email"
          placeholder="Re-enter your email address."
          onChange={handleChange}
        />
      </div>
      <div className="passwordContainer">
        Password:
        <input
          name="password"
          value={formValues.password}
          type="password"
          placeholder="Create a password."
          onChange={handleChange}
        />
        Confirm Password:
        <input
          name="confirmPassword"
          value={formValues.confirmPassword}
          type="password"
          placeholder="Re-enter your password."
          onChange={handleChange}
        />
      </div>
      <button id="signupButton">Submit</button>
    </form>
  );
};

export default SignupForm;
