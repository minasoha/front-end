import React from "react";
import { useHistory } from "react-router";
// import axiosWithAuth from "../../../utilities";

export const CreatePotluckPage = () => {
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
    <form onSubmit={handleSubmit}>
      <h1>Create a Potluck</h1>
      <label>
        Event Name:
        <input type="text" name="event-name" />
      </label>
      <label>
        Location:
        <input type="text" name="location" />
      </label>
      <label>
        Date/Time:
        <input type="datetime-local" name="dateTime" />
      </label>
      <button onSubmit={handleSubmit} className="button">
        Create Potluck
      </button>
    </form>
  );
};

export default CreatePotluckPage;
