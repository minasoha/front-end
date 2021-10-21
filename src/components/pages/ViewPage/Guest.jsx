import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { LoginContext } from "../../../contexts";
import { getPotluckItems, getPotluckGuests } from "./../../../services";

export const Guest = () => {
  // Destructuring
  const { user_id } = useContext(LoginContext);
  const { potluck_id } = useParams();

  // State
  const [currentItems, setCurrentItems] = useState([]);
  const [guests, setGuests] = useState([]);

  // Side Effects
  useEffect(() => {
    (async () => {
      const potluckItems = await getPotluckItems(user_id, potluck_id);
      const potluckGuests = await getPotluckGuests(user_id, potluck_id);
      setCurrentItems(potluckItems);
      setGuests(potluckGuests);
    })();
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
