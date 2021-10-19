import React from "react";
import { Link } from "react-router-dom";

export const CoverPage = () => {
  return (
    <section data-testid="cover-page" className="cover-page">
      <h1 className="cover-page__title">Potluck Planner</h1>
      <h2 className="cover-page__subtitle">
        Your one-stop shop for all things potluck.
      </h2>
      <Link
        to="/login"
        data-testid="cover-page__cta-button"
        className="button button--cover button--salmon"
      >
        Get Started
      </Link>
      <Link
        to="/dashboard"
        data-testid="cover-page__dev-button"
        className="button"
      >
        [DEV] Dashboard
      </Link>
    </section>
  );
};
