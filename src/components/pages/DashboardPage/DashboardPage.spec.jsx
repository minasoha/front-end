import React from "react";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithRouter } from "./../../../utilities";
import { DashboardPage } from "./DashboardPage";

describe("Dashboard Page", () => {
  it("renders without errors", () => {
    renderWithRouter(<DashboardPage />);
  });

  it("shows a popup when 'Join Potluck' is clicked", () => {
    renderWithRouter(<DashboardPage />);

    // Popup should be closed on mount; checking for that
    const dashboardJoinInitial = screen.queryByText("Join Now!");
    expect(dashboardJoinInitial).not.toBeInTheDocument();

    // Popup should display after activating it
    const joinPopupActivator = screen.getByTestId("dashboard__button--join");
    userEvent.click(joinPopupActivator);

    const dashboardJoinFinal = screen.getByText("Join Now!");
    expect(dashboardJoinFinal).toBeInTheDocument();
  });
});
