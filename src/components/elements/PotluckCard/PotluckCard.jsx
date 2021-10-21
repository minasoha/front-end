import React from "react";

export const PotluckCard = (props) => {
  const { potluck_name, location, date, time } = props.potluck;

  return (
    <div className="potluck-card">
      <h3 className="potluck-card__title">{potluck_name}</h3>
      <p className="potluck-card__description">Location: {location}</p>
      <p className="potluck-card__description">Date: {date}</p>
      <p className="potluck-card__description">Time: {time}</p>
    </div>
  );
};

export default PotluckCard;
