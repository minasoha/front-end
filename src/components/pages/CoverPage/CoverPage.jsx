import React from "react";
import { Link } from "react-router-dom";

export const CoverPage = () => {
  return (
    <section data-testid="cover-page">
      <h1 className="cover-page__title">Potluck Planner</h1>
      <h2 className="cover-page__subtitle">
        Your one-stop shop for all things potluck.
      </h2>
      <Link
        to="/login"
        data-testid="cover-page__cta-button"
        className="cover-page__cta-button"
      >
        Get Started
      </Link>
    </section>
  );
};
