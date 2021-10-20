import React from "react";
import { screen } from "@testing-library/react";
import { renderWithRouter } from "./../../../utilities";
import { WithNav } from "./WithNav";
import { LoginContext } from "./../../../contexts";

describe("Nav Wrapper", () => {
  it("can attach a navbar to a component", () => {
    const isLoggedIn = false;
    renderWithRouter(
      <LoginContext.Provider value={{ isLoggedIn }}>
        <WithNav component={<div>Test Component</div>} />
      </LoginContext.Provider>
    );
    const navbar = screen.getByTestId("navbar");
    expect(navbar).toBeInTheDocument();
  });
});
