import React from "react";
import { Link } from "react-router-dom";

export const DashboardPage = () => {
  return (
    <section data-testid="dashboard" className="dashboard">
      <Link
        to="/potluck/create"
        data-testid="dashboard__button--create"
        className="button"
      >
        Create New Potluck
      </Link>
      <Link
        to="/potluck/join"
        data-testid="dashboard__button--join"
        className="button"
      >
        Join Potluck
      </Link>

      <Link
        to="/potluck/view"
        data-testid="dashboard__button--view"
        className="button"
      >
        View Potluck
      </Link>
    </section>
  );
};

export default DashboardPage;
