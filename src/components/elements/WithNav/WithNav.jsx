import React from "react";
import { Navbar } from "./../Navbar";

export const WithNav = (props) => {
  const { component } = props;

  return (
    <>
      <Navbar />
      {component}
    </>
  );
};

export default WithNav;
