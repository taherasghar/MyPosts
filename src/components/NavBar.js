import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { closeSession } from "../features/session/sessionSlice";
const Navbar = () => {
  const location = useLocation();
  const session = useSelector((state) => state.session);
  const dispatch = useDispatch();
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="brand">
          <NavLink to="/" className="nav-logo">
            Blog For All
          </NavLink>
        </div>
        {location.pathname === "/" && session.status === "closed" ? (
          <div className={`nav-elements active`}>
              <NavLink to="/login">Login</NavLink>
              <NavLink to="/register">Register</NavLink>
          </div>
        ) : location.pathname === "/" && session.status === "opened" ? (
          <ul className="nav-elements active">
            <li>
              <NavLink
                to="/login"
                onClick={() => {
                  dispatch(closeSession());
                }}
              >
                Logout
              </NavLink>
            </li>
            <li>{session.name}</li>
          </ul>
        ) : null}
      </div>
    </nav>
  );
};

export default Navbar;
