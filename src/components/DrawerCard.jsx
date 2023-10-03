import React from "react";

export const DrawerCard = ({ icon, title }) => {
  return (
    <div className="card_title">
      <img src={icon} alt="" />
      <h4>{title}</h4>
    </div>
  );
};
