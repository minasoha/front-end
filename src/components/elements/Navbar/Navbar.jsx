import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <header className="navbar">
      <nav data-testid="navbar__nav" className="navbar__nav">
        <NavLink
          data-testid="navbar__navlink"
          className="navbar__navlink"
          to="/dashboard"
        >
          Dashboard
        </NavLink>
      </nav>
    </header>
  );
};
