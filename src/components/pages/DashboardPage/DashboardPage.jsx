import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Popup } from "./../JoinPotluckPage/JoinPotluckPage";
import { ViewPage } from "./../ViewPage/ViewPage";
import { PotluckCard } from "./../../elements";
import { axiosWithAuth } from "./../../../utilities";

export const DashboardPage = () => {
  const [userPotlucks, setUserPotlucks] = useState([]);
  const [popup, setPopup] = useState(false);

  const openPopup = () => {
    setPopup((popup) => !popup);
  };

  useEffect(() => {
    const updatePotlucks = async () => {
      try {
        // THIS REQUEST IS HARDCODED!!! Change the number at the end to match
        // your own user ID when testing; you can look for it by sending a get
        // request to the url below, with path "/api/users" via a console log
        // or a helper program like "Postman" (recommended)
        const response = await axiosWithAuth().get(
          "https://potluckplanner-bw-10-2021.herokuapp.com/api/potluck/9"
        );
        console.log(response);
        setUserPotlucks(response.data);
      } catch (error) {
        console.error("Failed to get user's potlucks:", error);
      }
      updatePotlucks();
    };
  }, []);

  return (
    <section data-testid="dashboard" className="dashboard">
      <h1 className="dashboard__title">Dashboard</h1>
      <ViewPage />
      <Link
        to="/potluck/create"
        data-testid="dashboard__button--create"
        className="button"
      >
        Create New Potluck
      </Link>
      <button
        data-testid="dashboard__button--join"
        className="button"
        onClick={openPopup}
      >
        Join Potluck
      </button>
      <Popup popup={popup} setPopup={setPopup} />

      <h2 className="dashboard__subtitle">Your Potlucks</h2>
      {userPotlucks.map((potluck) => {
        return <PotluckCard potluck={potluck} />;
      })}
    </section>
  );
};

export default DashboardPage;
