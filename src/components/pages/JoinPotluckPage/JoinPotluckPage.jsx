import React from "react";
import { useHistory } from "react-router-dom";

export const Popup = ({ popup, setPopup }) => {
  const { push } = useHistory;
  const handleClick = () => {
    push("/dashboard");
  };
  return (
    <>
      {popup ? (
        <form>
          <label>
            Enter your name:
            <input
              placeholder="Enter your full name "
              type="text"
              name="name"
            />
          </label>
          <label>
            Invite code:
            <input
              placeholder="Enter a valid invite code"
              type="text"
              name="inviteCode"
            />
          </label>
          <button onClick={handleClick} className="button">
            Join Now!
          </button>
        </form>
      ) : null}
    </>
  );
};
