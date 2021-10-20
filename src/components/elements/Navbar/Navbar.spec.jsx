import React from "react";
import { screen } from "@testing-library/react";
import { renderWithRouter } from "./../../../utilities";
import { Navbar } from "./Navbar";
import { LoginContext } from "./../../../contexts";

describe("Navbar Component", () => {
  it("renders without errors", () => {
    // Render the form with mocked global state
    localStorage.clear();
    const setIsLoggedIn = jest.fn();
    renderWithRouter(
      <LoginContext.Provider value={{ setIsLoggedIn }}>
        <Navbar />
      </LoginContext.Provider>,
      true
    );
  });
});
