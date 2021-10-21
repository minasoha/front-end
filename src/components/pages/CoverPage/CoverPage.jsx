import React, { useEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { LoginContext } from "../../../contexts";

export const CoverPage = () => {
  const { push } = useHistory();
  const { isLoggedIn } = useContext(LoginContext);

  useEffect(() => {
    if (isLoggedIn) {
      push("/dashboard");
    }
  }, []);

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
    </section>
  );
};
