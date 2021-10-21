import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { LoginContext } from "../../../contexts";
import { axiosWithAuth } from "./../../../utilities";

export const Organizer = () => {
  // Destructuring
  const { user_id } = useContext(LoginContext);
  const { potluck_id } = useParams();

  // State
  const [currentItems, setCurrentItems] = useState([]);
  const [itemsToAdd, setItemsToAdd] = useState([]);
  const [formValues, setFormValues] = useState({
    invite: "",
    item: "",
  });

  // Helpers
  const updateCurrentItems = async () => {
    try {
      const databaseItems = await axiosWithAuth().get(
        `https://potluckplanner-bw-10-2021.herokuapp.com/api/potluck/items/${user_id}/${potluck_id}`
      );
      setCurrentItems(databaseItems.data);
    } catch (error) {
      console.error("could not fetch current items", error);
    }
  };

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
    axiosWithAuth()
      .post(
        `https://potluckplanner-bw-10-2021.herokuapp.com/api/potluck/guests/${user_id}/${potluck_id}`,
        {
          username: formValues.invite,
        }
      )
      .then((response) => {
        console.log("successfully invited user!", response.data);
      })
      .catch((error) => {
        console.error("could not invite user!", error);
      });
  };

  const handleSubmitItems = () => {
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

  // Side Effects
  useEffect(() => {
    updateCurrentItems();
  }, []);
  useEffect(() => {}, [currentItems]);

  return (
    <section>
      <h3 className="page-title">Add a Person</h3>

      <form onSubmit={handleInviteUser}>
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

      <form onSubmit={handleAddItem}>
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

      <button onClick={handleSubmitItems}>Submit all Items</button>
    </section>
  );
};
