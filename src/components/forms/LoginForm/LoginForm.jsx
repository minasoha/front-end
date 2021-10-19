// Libraries
import React, { useState } from "react";

// Initial Form Data

const initialFormValues = {
    email: '',
    password: '',
};

export const LoginForm = () => {
    // State
    const [formValues, setFormValues] = useState(initialFormValues);

    //Event handlers
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const valueToUse = type === "checkbox" ? checked : value;
        setFormValues({ ...formValues, [name]: valueToUse});
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues.email)
        // Axios Call 
        // .then - setLoggedIn to true
    }

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