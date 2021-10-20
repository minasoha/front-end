import axios from "axios";
import React, { useEffect } from "react";

export const Guest = () => {
  // try {
  //   axios
  //     .get("")
  //     .then((resp) => {
  //       console.log(resp.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // } catch (err) {
  //   console.error("An error has occurred:", err);
  // }

  return (
    <section className="guests">
      <div>
        <input type="checkbox" />
      </div>
    </section>
  );
};
