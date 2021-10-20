import React from "react";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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

  it("can log a user out when logout button is pressed", () => {
    // Set up local storage
    localStorage.clear();
    localStorage.setItem("token", "testToken");

    // Mock global state
    const setIsLoggedIn = jest.fn();

    // Render the Navbar
    renderWithRouter(
      <LoginContext.Provider value={{ setIsLoggedIn }}>
        <Navbar />
      </LoginContext.Provider>,
      true
    );

    // Act: click the logout button
    const logoutButton = screen.getByTestId("navbar__logout-link");
    userEvent.click(logoutButton);

    // Assert: is login token gone, and login page current page?
    const loginToken = localStorage.getItem("token");
    expect(loginToken).toBeNull();
    expect(location.pathname).toEqual("/login");
  });
});
