import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { LoginContext } from "../../../contexts";
import {
  getPotluckItems,
  getPotluckGuests,
  inviteGuest,
  requestItems,
} from "./../../../services";

export const Organizer = () => {
  // Destructuring
  const { user_id } = useContext(LoginContext);
  const { potluck_id } = useParams();

  // State
  const [currentItems, setCurrentItems] = useState([]);
  const [guests, setGuests] = useState([]);
  const [itemsToAdd, setItemsToAdd] = useState([]);
  const [formValues, setFormValues] = useState({
    invite: "",
    item: "",
  });

  // Event Handlers
  const handleAddItem = (e) => {
    e.preventDefault();
    setItemsToAdd([...itemsToAdd, { item: formValues.item }]);
  };
  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  const handleInviteUser = (e) => {
    e.preventDefault();
    inviteGuest(formValues.invite);
  };
  const handleSubmitItems = (e) => {
    // Send API request
    requestItems(itemsToAdd, user_id, potluck_id);
    // Update Local State
    setCurrentItems([...currentItems, ...itemsToAdd]);
    // Clear Form Inputs
    setItemsToAdd([]);
    setFormValues({
      ...formValues,
      item: "",
    });
  };

  // Side Effects
  useEffect(() => {
    (async () => {
      const potluckItems = await getPotluckItems(user_id, potluck_id);
      const potluckGuests = await getPotluckGuests(user_id, potluck_id);
      setCurrentItems(potluckItems);
      setGuests(potluckGuests);
    })();
  }, []);
  useEffect(() => {}, [currentItems, itemsToAdd, guests]);

  return (
    <section>
      <h3 className="page-title">Add a Person</h3>

      <form className="form" onSubmit={handleInviteUser}>
        <label className="form__label">
          Username:
          <input
            type="text"
            name="invite"
            value={formValues.invite}
            onChange={handleInputChange}
          />
          <button className="button">Invite</button>
        </label>
      </form>

      <div>
        <h3>Current Items</h3>
        {currentItems.map((item) => {
          return <p>{item.item}</p>;
        })}
      </div>

      <hr />

      <h3 className="page-title">ADD Items</h3>

      {itemsToAdd.map((item) => {
        return <p>{item.item}</p>;
      })}

      <form className="form" onSubmit={handleAddItem}>
        <label className="form__label">
          Item Name:
          <input
            type="text"
            name="item"
            value={formValues.item}
            onChange={handleInputChange}
          />
          <button className="button">Add Item</button>
        </label>
      </form>

      <button onClick={handleSubmitItems}>Submit all Items</button>
    </section>
  );
};
