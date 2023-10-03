import React from "react";
import { Navbar } from "./Navbar";
import { Event } from "./Event";

const Home = () => {
  return (
    <div className="right-section">
      <Navbar />
      <Event />
    </div>
  );
};

export default Home;
