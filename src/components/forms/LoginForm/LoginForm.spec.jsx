import React from "react";
import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axios from "axios";

import { renderWithRouter } from "./../../../utilities";
import { LoginContext } from "./../../../contexts";
import { LoginForm } from "./../LoginForm";

jest.mock("axios");

describe("Login Form", () => {
  it("renders without errors", () => {
    // Render the form with mocked global state
    localStorage.clear();
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
    localStorage.clear();
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

  it("validates that both fields are filled in", async () => {
    // Arrange: Render the form with mocked global state
    localStorage.clear();
    const isLoggedIn = false;
    const setIsLoggedIn = jest.fn();
    renderWithRouter(
      <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        <LoginForm />
      </LoginContext.Provider>,
      true
    );

    // Act/Assert: Fill out the form in an invalid manner, looking for errors
    const usernameInput = screen.getByLabelText("Username:");
    const passwordInput = screen.getByLabelText("Password:");

    userEvent.type(usernameInput, "b");
    userEvent.type(usernameInput, "{backspace}");

    const usernameReq = await screen.findByText(/username required/i);
    expect(usernameReq).toBeInTheDocument();

    userEvent.type(passwordInput, "g");
    userEvent.type(passwordInput, "{backspace}");

    const passwordReq = await screen.findByText(/password required/i);
    expect(passwordReq).toBeInTheDocument();
  });

  it("shows errors if login request fails", async () => {
    // Arrange: Render the form with mocked global state (without localStorage)
    // and a mock failure API call
    localStorage.clear();
    axios.post.mockRejectedValueOnce({
      data: {
        message: "invalid credentials.",
      },
    });

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
    userEvent.type(passwordInput, "goats");

    // Assert: Expect an error message to be on-screen
    await waitFor(() => {
      userEvent.click(submitButton);
      const errorMessage = screen.getByText(/could not authenticate user/i);
      expect(errorMessage).toBeInTheDocument();
    });
  });

  it("redirects to dashboard if login is successful", async () => {
    localStorage.clear();
    axios.post.mockResolvedValueOnce({
      data: {
        message: "welcome, billy",
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InBvcCIsImlhdCI6MTYzNDU5MjIzOSwiZXhwIjoxNjM0Njc4NjM5fQ.RyKXp7JDBXS-fUNboBRH9lVje76Nnj43haMA7MJmbCI",
      },
    });
    const isLoggedIn = false;
    const setIsLoggedIn = jest.fn();
    renderWithRouter(
      <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        <LoginForm />
      </LoginContext.Provider>,
      true
    );

    // Act: Attempt to sign in a registered user
    const usernameInput = screen.getByLabelText("Username:");
    const passwordInput = screen.getByLabelText("Password:");
    const submitButton = screen.getByTestId("login-button");

    userEvent.type(usernameInput, "billy");
    userEvent.type(passwordInput, "goats");

    // Assert: Expect to be redirected to "/dashboard"
    await waitFor(() => {
      userEvent.click(submitButton);
      expect(location.pathname).toEqual("/dashboard");
    });
  });

  it("redirects to dashboard if user is already logged in", async () => {
    localStorage.clear();
    localStorage.setItem("token", "testToken");
    const isLoggedIn = true;
    const setIsLoggedIn = jest.fn();

    renderWithRouter(
      <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        <LoginForm />
      </LoginContext.Provider>,
      true
    );

    await waitFor(() => {
      expect(location.pathname).toEqual("/dashboard");
    });
  });
});
