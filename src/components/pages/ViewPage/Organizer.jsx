import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { LoginContext } from "../../../contexts";
import { axiosWithAuth } from "./../../../utilities";

export const Organizer = () => {
  // Destructuring
  const { user_id } = useContext(LoginContext);
  const { potluck_id } = useParams();

  // State
  const [itemsToAdd, setItemsToAdd] = useState([]);
  const [formValues, setFormValues] = useState({
    invite: "",
    item: "",
  });

  // Event Handlers
  const addItem = (e) => {
    e.preventDefault();
    setItemsToAdd([...itemsToAdd, formValues.item]);
  };
  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  const inviteUser = () => {};

  const submitItems = () => {
    axiosWithAuth()
      .post(
        `https://potluckplanner-bw-10-2021.herokuapp.com/api/potluck/items/${user_id}/${potluck_id}`,
        itemsToAdd
      )
      .then((response) => {
        console.log("adding items succesful!", response);
      })
      .catch((error) => {
        console.error("Failed to add item", error);
      });
  };

  return (
    <section>
      <h3 className="page-title">Add a Person</h3>

      <form onSubmit={inviteUser}>
        <label>
          Username:
          <input
            type="text"
            name="invite"
            value={formValues.invite}
            onChange={handleInputChange}
          />
        </label>
        <button className="button">Invite</button>
      </form>

      <hr />

      <h3 className="page-title">ADD Items</h3>

      {itemsToAdd.map((item) => {
        return <p>{item}</p>;
      })}

      <form onSubmit={addItem}>
        <label>
          Item Name:
          <input
            type="text"
            name="item"
            value={formValues.item}
            onChange={handleInputChange}
          />
        </label>
        <button className="button">Add Item</button>
      </form>

      <button onClick={submitItems}>Submit all Items</button>
    </section>
  );
};
