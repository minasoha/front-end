import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { LoginContext } from "../../../contexts";
import { axiosWithAuth } from "../../../utilities";

export const Guest = () => {
  // Destructuring
  const { user_id } = useContext(LoginContext);
  const { potluck_id } = useParams();

  // State
  const [currentItems, setCurrentItems] = useState([]);
  const [guests, setGuests] = useState([]);

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
  const updateGuests = async () => {
    try {
      const guestList = await axiosWithAuth().get(
        `https://potluckplanner-bw-10-2021.herokuapp.com/api/potluck/guests/${user_id}/${potluck_id}`
      );
      setGuests(guestList.data);
    } catch (error) {
      console.error(error);
    }
  };

  // Side Effects
  useEffect(() => {
    updateCurrentItems();
    updateGuests();
  }, []);
  useEffect(() => {}, [currentItems, guests]);

  return (
    <section>
      <div>
        <h3>Current Items</h3>
        {currentItems.map((item) => {
          return <p>{item.item}</p>;
        })}
        <h3>Current Guests</h3>
        {guests.map((guest) => {
          return <p>{guest.username}</p>;
        })}
      </div>
    </section>
  );
};
