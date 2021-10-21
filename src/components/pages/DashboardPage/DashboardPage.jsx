import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Popup } from "./../JoinPotluckPage/JoinPotluckPage";
import { ViewPage } from "./../ViewPage/ViewPage";
import { PotluckCard } from "./../../elements";
import { axiosWithAuth } from "./../../../utilities";
import { LoginContext } from "./../../../contexts";

export const DashboardPage = () => {
  const { user_id } = useContext(LoginContext);

  const [userPotlucks, setUserPotlucks] = useState([]);
  const [popup, setPopup] = useState(false);

  const openPopup = () => {
    setPopup((popup) => !popup);
  };

  useEffect(() => {
    axiosWithAuth()
      .get(
        `https://potluckplanner-bw-10-2021.herokuapp.com/api/potluck/${user_id}`
      )
      .then((response) => {
        console.log(response);
        setUserPotlucks(response.data);
      })
      .catch((error) => {
        console.error("could not fetch potlucks:", error);
      });
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
