import React from "react";
import { screen } from "@testing-library/react";
import { renderWithRouter } from "../../../utilities";
import { PrivateRoute } from "./PrivateRoute";

describe("Private Route", () => {
  it("redirects to login page when no token is present in localStorage", () => {
    // Arrange: Create a test component
    const TestComponent = () => {
      return <div>private content</div>;
    };

    // Act: Render the page after clearing localStorage
    localStorage.clear();
    renderWithRouter(<PrivateRoute component={TestComponent} />, true);

    // Assert: Verify private content didn't load and user is redirected
    const sensitiveContent = screen.queryByText(/private content/i);
    expect(sensitiveContent).not.toBeInTheDocument();
    expect(location.pathname).toEqual("/login");
  });

  it("renders a private page when 'token' exists in localStorage", () => {
    // Arrange: Add a token to localStorage, and make a test component
    localStorage.setItem("token", "testToken");
    const TestComponent = () => {
      return <div>private content</div>;
    };

    // Act: Render the page without clearing localStorage
    renderWithRouter(<PrivateRoute component={TestComponent} />, true);

    // Arrange: Verify that private content was loaded
    const sensitiveContent = screen.queryByText(/private content/i);
    expect(sensitiveContent).toBeInTheDocument();
    localStorage.clear();
  });
});
