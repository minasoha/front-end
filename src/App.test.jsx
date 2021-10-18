import { screen } from "@testing-library/react";
import { renderWithRouter } from "./utilities";
import App from "./App";

describe("App component", () => {
  it("renders without errors", () => {
    renderWithRouter(<App />);
  });

  it("shows the homepage on first load", () => {
    renderWithRouter(<App />);
    const coverPage = screen.queryByTestId("cover-page");
    expect(coverPage).toBeInTheDocument();
  });
});
