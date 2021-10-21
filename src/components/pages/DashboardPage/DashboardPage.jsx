import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { PotluckCard } from "./../../elements";
import { axiosWithAuth } from "./../../../utilities";
import { LoginContext } from "./../../../contexts";

export const DashboardPage = () => {
  const { user_id, setUser_id, isLoggedIn, setIsLoggedIn } =
    useContext(LoginContext);
  const [userPotlucks, setUserPotlucks] = useState([]);

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
  }, [user_id]);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLoggedIn(true);
      setUser_id(localStorage.getItem("user_id"));
    }
  }, [isLoggedIn, user_id]);

  return (
    <section data-testid="dashboard" className="dashboard">
      <h1 className="dashboard__title">Dashboard</h1>
      <Link
        to="/potluck/create"
        data-testid="dashboard__button--create"
        className="button"
      >
        Create New Potluck
      </Link>

      <h2 className="dashboard__subtitle">Your Potlucks</h2>
      {userPotlucks.map((potluck) => {
        return <PotluckCard potluck={potluck} />;
      })}
    </section>
  );
};

export default DashboardPage;
