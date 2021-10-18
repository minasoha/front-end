import React from "react";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithRouter } from "./../../../utilities";
import { CoverPage } from "./CoverPage";

describe("Cover Page", () => {
  it("renders without errors", () => {
    renderWithRouter(<CoverPage />);
  });

  it("links to login page when 'get started' is clicked", () => {
    renderWithRouter(<CoverPage />, true);
    const getStartedButton = screen.getByTestId("cover-page__cta-button");
    userEvent.click(getStartedButton);
    expect(window.location.pathname).toEqual("/login");
  });
});
