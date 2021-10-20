import React, { useState } from "react";
import axios from "axios";

const initialItemValue = {
  item: "",
  description: "",
};

export const Organizer = () => {
  const [item, setItem] = useState(initialItemValue);

  const handleChange = (e) => {
    setItem({ ...item, [e.target.item]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "https://potluckplanner-bw-10-2021.herokuapp.com/api/potluck/items/:user_id/:potluck_id",
        item
      );
    } catch (err) {
      console.error("Failed to add item", err);
    }
  };
  return (
    <section className="organizer" onSubmit={handleSubmit}>
      <div className="invite-code">
        <h3 className="page-title">Add a Person</h3>
        <label>
          Username:
          <input type="text" onChange={handleChange} name="username" />
        </label>
        <button className="button">Invite</button>
      </div>
      <hr />
      <div className="add-items">
        <h3 className="page-title">ADD Items</h3>
        <label>
          Item Name:
          <input type="text" onChange={handleChange} name="item" />
        </label>
        <br />
        <br />
        <label>
          Description:
          <input type="text" onChange={handleChange} name="description" />
        </label>
        <button className="button" onClick={handleSubmit}>
          Add Item
        </button>
      </div>
    </section>
  );
};
