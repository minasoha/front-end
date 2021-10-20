import React from "react";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithRouter } from "./../../../utilities";
import { LoginPage } from "./LoginPage";
import { LoginContext } from "./../../../contexts";

describe("Login Page", () => {
  it("renders without errors", () => {
    // Render the form with mocked global state
    localStorage.clear();
    const isLoggedIn = false;
    const setIsLoggedIn = jest.fn();
    renderWithRouter(
      <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        <LoginPage />
      </LoginContext.Provider>,
      true
    );
  });

  it("can route between /login and /login/signup when buttons are clicked", () => {
    // Render the form with mocked global state
    localStorage.clear();
    const isLoggedIn = false;
    const setIsLoggedIn = jest.fn();
    renderWithRouter(
      <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        <LoginPage />
      </LoginContext.Provider>,
      true
    );

    // Clicking the signup button will route to /login/signup
    const signupButton = screen.getByTestId("login-page__signup-button");
    userEvent.click(signupButton);
    expect(window.location.pathname).toEqual("/login/signup");

    // From signup, clicking the login button goes back to /login
    const loginButton = screen.getByTestId("login-page__login-button");
    userEvent.click(loginButton);
    expect(window.location.pathname).toEqual("/login");
  });
});
