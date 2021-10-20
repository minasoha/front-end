import React from "react";
import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithRouter } from "./../../../utilities";
import { LoginContext } from "./../../../contexts";
import { LoginForm } from "./../LoginForm";

describe("Login Form", () => {
  it("renders without errors", () => {
    // Render the form with mocked global state
    const isLoggedIn = false;
    const setIsLoggedIn = jest.fn();
    renderWithRouter(
      <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        <LoginForm />
      </LoginContext.Provider>,
      true
    );
  });

  it("allows user to type in username/password fields", async () => {
    // Arrange: Render the form with mocked global state
    const isLoggedIn = false;
    const setIsLoggedIn = jest.fn();
    renderWithRouter(
      <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        <LoginForm />
      </LoginContext.Provider>,
      true
    );

    // Act: Type into username/password fields
    const usernameInput = screen.getByLabelText("Username:");
    const passwordInput = screen.getByLabelText("Password:");

    userEvent.type(usernameInput, "billy");
    userEvent.type(passwordInput, "goat");

    // Assert: Expect what I typed to be inside those fields
    await waitFor(() => {
      expect(usernameInput.value).toEqual("billy");
      expect(passwordInput.value).toEqual("goat");
    });
  });

  it("shows errors if login is invalid", async () => {
    // Arrange: Render the form with mocked global state (without localStorage)
    localStorage.clear();
    const isLoggedIn = false;
    const setIsLoggedIn = jest.fn();
    renderWithRouter(
      <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        <LoginForm />
      </LoginContext.Provider>,
      true
    );

    // Act: Attempt to login in an unregistered user
    const usernameInput = screen.getByLabelText("Username:");
    const passwordInput = screen.getByLabelText("Password:");
    const submitButton = screen.getByTestId("login-button");

    userEvent.type(usernameInput, "billy");
    userEvent.type(passwordInput, "goat");
    userEvent.click(submitButton);

    // Assert: Expect an error message to be on-screen
    await waitFor(() => {
      const errorMessage = screen.getByText(
        "Could not authenticate user! Please try again, later."
      );
      expect(errorMessage).toBeInTheDocument();
    });
  });

  it.todo("redirects to dashboard if login is successful");
});
