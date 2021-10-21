import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { LoginContext } from "./../../../contexts";
import { Organizer } from "./Organizer";
import { Guest } from "./Guest";

export const ViewPage = () => {
  const { user_id } = useContext(LoginContext);
  const { organizer } = useParams();
  const [isOrganizer, setIsOrganizer] = useState(false);

  useEffect(() => {
    if (user_id === organizer) {
      setIsOrganizer(true);
    }
  }, [user_id]);

  return (
    <section className="view-page">
      <h2>You are organizer: {isOrganizer ? "true" : "false"}</h2>
      {isOrganizer ? <Organizer /> : <Guest />}
    </section>
  );
};
