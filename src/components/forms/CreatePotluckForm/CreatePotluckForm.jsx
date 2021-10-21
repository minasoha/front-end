import React, { useState } from "react";
import { useHistory } from "react-router";
import { axiosWithAuth } from "./../../../utilities";

// Initial State Data
const initialPotluckValues = {
  potluck_name: "",
  location: "",
  date: "",
  time: "",
};

export const CreatePotluckForm = () => {
  // Destructuring
  const { push } = useHistory();

  // State Initialization
  const [potluckValues, setPotluckValues] = useState(initialPotluckValues);

  // Event Handlers
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPotluckValues({
      ...potluckValues,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(potluckValues);
    // push("/dashboard");
  };

  // Markup
  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="form__label">
        Event Name:
        <input
          className="form__text-field"
          type="text"
          name="potluck_name"
          onChange={handleChange}
          value={potluckValues.potluck_name}
        />
      </label>
      <label className="form__label">
        Location:
        <input
          className="form__text-field"
          type="text"
          name="location"
          onChange={handleChange}
          value={potluckValues.location}
        />
      </label>
      <label className="form__label">
        Date (mm-dd-yy):
        <input
          className="form__text-field"
          type="text"
          name="date"
          onChange={handleChange}
          value={potluckValues.date}
        />
      </label>
      <label className="form__label">
        Time (hh:mm:ss):
        <input
          className="form__text-field"
          type="text"
          name="time"
          onChange={handleChange}
          value={potluckValues.time}
        />
      </label>
      <button onSubmit={handleSubmit} className="button">
        Create Potluck
      </button>
    </form>
  );
};

export default CreatePotluckForm;
