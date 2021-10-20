import React from "react";
import { Guest } from "./Guest";
import { Organizer } from "./Organizer";
export function ViewPage() {
  //if user is organizer then show <Organizer /> else show <Guest />
  return (
    <div>
      <Organizer />
      <Guest />
    </div>
  );
}
