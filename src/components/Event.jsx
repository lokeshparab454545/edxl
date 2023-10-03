import React from "react";
import { EventCreateCard } from "./EventCreateCard";
import { EventAttendedCard } from "./EventAttendedCard";

export const Event = () => {
  return (
    <div className="event">
      <div className="event-created">
        <h1>Events Created</h1>
        <div className="events-create-info">
          <EventCreateCard />
          <EventCreateCard />
          <EventCreateCard />
        </div>
      </div>
      <div className="event-created">
        <h1>Events Attended</h1>
        <div className="events-attend-info">
          <EventAttendedCard />
          <EventAttendedCard />
        </div>
      </div>
    </div>
  );
};
