import React from "react";
import { render } from "@testing-library/react";
import { CoverPage } from "./CoverPage";

describe("Home Page Component", () => {
  it("renders without errors", () => {
    render(<CoverPage />);
  });
});
