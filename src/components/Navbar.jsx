import React from "react";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="search-bar">
        <input type="text" placeholder="Search here..." />
        <img src="./_search outline_.png" alt="" />
      </div>
      <img className="icon_msg" src="icon _message_.png" alt="" />
      <img className="icon_bell" src="icon _notification_.png" alt="" />
      <div className="profile">
        <img className="profile_img" src="profile_photo.png" alt="" />
        <div className="profile-info">
          <h5>Steve</h5>
          <p>Admin</p>
        </div>
        <img className="arrow_down" src="_arrow down.png" alt="" />
      </div>
    </div>
  );
};
