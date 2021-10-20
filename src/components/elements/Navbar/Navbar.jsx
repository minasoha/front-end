import React, { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { LoginContext } from "./../../../contexts";

export const Navbar = () => {
  const { push } = useHistory();
  const { setIsLoggedIn } = useContext(LoginContext);

  const logout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    push("/login");
  };

  return (
    <header className="navbar">
      <nav data-testid="navbar__nav" className="navbar__nav">
        <NavLink
          data-testid="navbar__dashboard-link"
          className="navbar__navlink"
          to="/dashboard"
        >
          Dashboard
        </NavLink>
        <a
          data-testid="navbar__logout-link"
          className="navbar__navlink navbar__navlink--logout"
          onClick={logout}
        >
          ⎋ | Log Out
        </a>
      </nav>
    </header>
  );
};
