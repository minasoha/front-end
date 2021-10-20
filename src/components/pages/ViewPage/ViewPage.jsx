import React from "react";

export function ViewPage() {
  return (
    <div>
      <div className="invite-code">
        <h3 className="page-title">Add a Person</h3>
        <label>
          Username:
          <input type="text" name="username" />
        </label>
        <button className="button">Invite</button>
      </div>
      <hr />
      <div className="add-items">
        <h3 className="page-title">ADD Items</h3>
        <label>
          Item Name:
          <input type="text" name="item" />
        </label>
        <br />
        <br />
        <label>
          Description:
          <input type="text" name="description" />
        </label>
      </div>
    </div>
  );
}
