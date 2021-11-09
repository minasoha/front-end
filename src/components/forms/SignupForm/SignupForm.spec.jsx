// Libraries
import React from "react";
import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axios from "axios";
// Components
import { SignupForm } from "./SignupForm";
// Contexts
import { LoginContext } from "./../../../contexts";
// Utilities
import { renderWithRouter } from "./../../../utilities";
// Mock axios
jest.mock("axios");

describe("Signup Form", () => {
  it("renders without errors", () => {
    // Render the form with mocked global state
    localStorage.clear();
    const isLoggedIn = false;
    renderWithRouter(
      <LoginContext.Provider value={{ isLoggedIn }}>
        <SignupForm />
      </LoginContext.Provider>,
      true
    );
  });

  it("allows user to type inside email/password/confirm fields", async () => {
    // Act: Clear localstorage, mock logged-out status, render with router
    localStorage.clear();
    const isLoggedIn = false;
    renderWithRouter(
      <LoginContext.Provider value={{ isLoggedIn }}>
        <SignupForm />
      </LoginContext.Provider>,
      true
    );

    // Act: Type into all four input fields
    const emailInput = screen.getByLabelText("Email:");
    const confirmEmailInput = screen.getByLabelText("Confirm Email:");
    const passwordInput = screen.getByLabelText("Password:");
    const confirmPasswordInput = screen.getByLabelText("Confirm Password:");

    userEvent.type(emailInput, "batman@gmail.com");
    userEvent.type(confirmEmailInput, "batman@gmail.com");
    userEvent.type(passwordInput, "th3B4TC4V35");
    userEvent.type(confirmPasswordInput, "th3B4TC4V35");

    // Assert: Does each input contain what we typed?
    await waitFor(() => {
      expect(emailInput.value).toEqual("batman@gmail.com");
      expect(confirmEmailInput.value).toEqual("batman@gmail.com");
      expect(passwordInput.value).toEqual("th3B4TC4V35");
      expect(confirmPasswordInput.value).toEqual("th3B4TC4V35");
    });
  });

  it("sends POST request when form is filled out and submitted", async () => {
    // Spy on "axios.post"
    axios.post = jest.fn();

    // Render the form with mocked global state
    localStorage.clear();
    const isLoggedIn = false;
    renderWithRouter(
      <LoginContext.Provider value={{ isLoggedIn }}>
        <SignupForm />
      </LoginContext.Provider>,
      true
    );

    // Act: Fill in all fields and click submit
    const username = screen.getByLabelText("Username:");
    const email = screen.getByLabelText("Email:");
    const password = screen.getByLabelText("Password:");
    const confirmEml = screen.getByLabelText("Confirm Email:");
    const confirmPwd = screen.getByLabelText("Confirm Password:");
    const submit = screen.getByTestId("signup-button");

    userEvent.type(username, "username");
    userEvent.type(email, "user@email.com");
    userEvent.type(password, "password");
    userEvent.type(confirmEml, "user@email.com");
    userEvent.type(confirmPwd, "password");

    // Assert: Does axios get invoked?
    await waitFor(() => {
      userEvent.click(submit);
      expect(axios.post).toBeCalled();
    });
  });

  it("redirects to the dashboard if user is already logged in", () => {
    // Arrange/Act: render the form as if logged in
    localStorage.clear();
    const isLoggedIn = true;
    renderWithRouter(
      <LoginContext.Provider value={{ isLoggedIn }}>
        <SignupForm />
      </LoginContext.Provider>,
      true
    );

    // Assert: is a logged in user redirected to dashboard?
    expect(location.pathname).toEqual("/dashboard");
  });

  it("can show error for password being too short", async () => {
    // Arrange: render the form logged out
    localStorage.clear();
    const isLoggedIn = false;
    renderWithRouter(
      <LoginContext.Provider value={{ isLoggedIn }}>
        <SignupForm />
      </LoginContext.Provider>,
      true
    );

    // Act: type in a too-short password
    const password = screen.getByLabelText("Password:");
    userEvent.type(password, "p");

    // Assert: is the password error showing up?
    await waitFor(() => {
      const passwordError = screen.getByText(
        /password must be at least 4 characters long/i
      );
      expect(passwordError).toBeInTheDocument();
    });
  });

  it("can show error for invalid email", async () => {
    // Arrange: render the form logged out
    localStorage.clear();
    const isLoggedIn = false;
    renderWithRouter(
      <LoginContext.Provider value={{ isLoggedIn }}>
        <SignupForm />
      </LoginContext.Provider>,
      true
    );

    // Act: type in a an invalid email
    const email = screen.getByLabelText("Email:");
    userEvent.type(email, "p");

    // Assert: is the email error showing up?
    await waitFor(() => {
      const emailError = screen.getByText(/this email address is not valid/i);
      expect(emailError).toBeInTheDocument();
    });
  });

  // it("can show errors for confirmation passwords/emails not matching", async () => {
  //   // Arrange: render the form logged out
  //   localStorage.clear();
  //   const isLoggedIn = false;
  //   renderWithRouter(
  //     <LoginContext.Provider value={{ isLoggedIn }}>
  //       <SignupForm />
  //     </LoginContext.Provider>,
  //     true
  //   );

  //   // Act: Type into all four input fields w/o matching email/passwords
  //   // Assert: Check if the matching errors show up
  //   const emailInput = screen.getByLabelText("Email:");
  //   const confirmEmailInput = screen.getByLabelText("Confirm Email:");
  //   const passwordInput = screen.getByLabelText("Password:");
  //   const confirmPasswordInput = screen.getByLabelText("Confirm Password:");

  //   userEvent.type(emailInput, "batman@gmail.com");
  //   userEvent.type(confirmEmailInput, "robin@gmail.com");

  //   const emailError = await screen.findByText(/emails do not match/i);
  //   expect(emailError).toBeInTheDocument();

  //   userEvent.type(passwordInput, "th3B4TC4V35");
  //   userEvent.type(confirmPasswordInput, "sidekick");

  //   const passwordError = await screen.findByText(/passwords do not match/i);
  //   expect(passwordError).toBeInTheDocument();
  // });

  it("can show error for username being already taken", async () => {
    // Force username taken message to be returned on submit
    axios.post.mockRejectedValueOnce({
      data: {
        message: "username taken",
      },
    });
    localStorage.clear();
    const isLoggedIn = false;
    renderWithRouter(
      <LoginContext.Provider value={{ isLoggedIn }}>
        <SignupForm />
      </LoginContext.Provider>,
      true
    );

    // Act: fill out the form and submit
    const username = screen.getByLabelText("Username:");
    const email = screen.getByLabelText("Email:");
    const password = screen.getByLabelText("Password:");
    const confirmEml = screen.getByLabelText("Confirm Email:");
    const confirmPwd = screen.getByLabelText("Confirm Password:");
    const submit = screen.getByTestId("signup-button");

    userEvent.type(username, "username");
    userEvent.type(email, "user@email.com");
    userEvent.type(password, "password");
    userEvent.type(confirmEml, "user@email.com");
    userEvent.type(confirmPwd, "password");

    // Assert: does the username taken error show up?
    await waitFor(() => {
      userEvent.click(submit);
      const usernameTakenErr = screen.getByText(/username already taken/i);
      expect(usernameTakenErr).toBeInTheDocument();
    });
  });
});
