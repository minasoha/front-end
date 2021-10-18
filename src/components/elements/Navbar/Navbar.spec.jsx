import React from "react";
import { screen } from "@testing-library/react";
import { renderWithRouter } from "./../../../utilities";
import { Navbar } from "./Navbar";

describe("Navbar Component", () => {
  it("renders without errors", () => {
    renderWithRouter(<Navbar />);
  });

  it("has nav with link(s)", () => {
    renderWithRouter(<Navbar />);
    screen.getByTestId("navbar__nav");
    screen.getAllByTestId("navbar__navlink");
  });
});
