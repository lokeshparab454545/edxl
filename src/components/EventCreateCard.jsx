import React from "react";

export const EventCreateCard = () => {
  return (
    <div className="event-create">
      <div className="date">
        <p>24</p>
        <p>August</p>
        <p>2023</p>
      </div>
      <div className="event-title">
        <h5>Digital Marketing in the world of digitalization</h5>
        <div className="event-detail">
          <div className="event-details">
            <img src="icon _user_.png" alt="" />
            <p>Collis</p>
          </div>
          <div className="event-details">
            <img src="icon _location pin_.png" alt="" />
            <p>Online/GoogleMeet</p>
          </div>
          <div className="event-details">
            <img src="icon _alarm_.png" alt="" />
            <p>9:30 - 10:30</p>
          </div>
        </div>
      </div>
      <button className="event-btn">Event Summary</button>
    </div>
  );
};
