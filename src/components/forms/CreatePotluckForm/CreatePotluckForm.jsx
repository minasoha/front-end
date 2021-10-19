import React from "react";
import { useHistory } from "react-router";
// import axiosWithAuth from "../../../utilities";

export const CreatePotluckForm = () => {
  const { push } = useHistory();

  // useEffect(
  //   axiosWithAuth()
  //     .post("")
  //     .then((resp) => {
  //       console.log(resp);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     })
  // );

  const handleSubmit = (e) => {
    e.preventDefault();
    push("/dashboard");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>
        Event Name:
        <input className="form__text-field" type="text" name="event-name" />
      </label>
      <label>
        Location:
        <input className="form__text-field" type="text" name="location" />
      </label>
      <label>
        Date/Time:
        <input
          className="form__date-field"
          type="datetime-local"
          name="dateTime"
        />
      </label>
      <button onSubmit={handleSubmit} className="button">
        Create Potluck
      </button>
    </form>
  );
};

export default CreatePotluckForm;
