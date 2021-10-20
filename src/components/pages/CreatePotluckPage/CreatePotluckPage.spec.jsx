import React from "react";
import { renderWithRouter } from "./../../../utilities";
import { CreatePotluckPage } from "./CreatePotluckPage";

describe("Create Potluck Page", () => {
  it("renders without errors", () => {
    renderWithRouter(<CreatePotluckPage />);
  });
});
