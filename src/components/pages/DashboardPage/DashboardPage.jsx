import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Popup } from "../JoinPotluckPage/JoinPotluckPage";
import { ViewPage } from "../ViewPage/ViewPage";
export const DashboardPage = () => {
  const [popup, setPopup] = useState(false);

  const openPopup = () => {
    setPopup((popup) => !popup);
  };

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
      {/* The below is placeholder code until we have a working system! */}

      <h2 className="dashboard__subtitle">Your Potlucks</h2>

      {/* These cards are prime for refactoring! */}
      {/* They should be their own component */}

      <div className="potluck-card">
        <h3 className="potluck-card__title">Potluck 1</h3>
        <Link
          to="/potluck/view/1"
          data-testid="dashboard__button--view"
          className="button"
        >
          View
        </Link>
      </div>
      <div className="potluck-card">
        <h3 className="potluck-card__title">Potluck 2</h3>
        <Link
          to="/potluck/view/2"
          data-testid="dashboard__button--view"
          className="button"
        >
          View
        </Link>
      </div>
      <div className="potluck-card">
        <h3 className="potluck-card__title">Potluck 3</h3>
        <Link
          to="/potluck/view/3"
          data-testid="dashboard__button--view"
          className="button"
        >
          View
        </Link>
      </div>
    </section>
  );
};

export default DashboardPage;
