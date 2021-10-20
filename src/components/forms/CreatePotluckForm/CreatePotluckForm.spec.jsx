import React from "react";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CreatePotluckForm } from "./CreatePotluckForm";
import { renderWithRouter } from "./../../../utilities";

describe("Create Potluck Form", () => {
  it("renders without errors", () => {
    renderWithRouter(<CreatePotluckForm />, true);
  });

  it("redirects to the dashboard on-submit", () => {
    renderWithRouter(<CreatePotluckForm />, true);
    const submitButton = screen.getByText("Create Potluck");
    userEvent.click(submitButton);
    expect(location.pathname).toEqual("/dashboard");
  });
});
