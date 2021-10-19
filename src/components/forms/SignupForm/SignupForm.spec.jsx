import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SignupForm } from "./SignupForm";

describe("Signup Form", () => {
  it("renders without errors", () => {
    render(<SignupForm />);
  });

  it("lets user type inside inputs for email/password/confirms", () => {
    // Arrange: Render the form
    render(<SignupForm />);

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
    expect(emailInput.value).toEqual("batman@gmail.com");
    expect(confirmEmailInput.value).toEqual("batman@gmail.com");
    expect(passwordInput.value).toEqual("th3B4TC4V35");
    expect(confirmPasswordInput.value).toEqual("th3B4TC4V35");
  });

  it.todo("invokes submit handler when submit button is pressed");
});
