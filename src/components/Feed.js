import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./NavBar";
const Feed = () => {
  return (
    <div className="feed-page">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Feed;
