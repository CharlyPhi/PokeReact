import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <ul>
        <NavLink
          to="/Home"
          className={(nav) => (nav.isActive ? "nav-active" : " ")}
        >
          <li>Homepage</li>
        </NavLink>
        <NavLink
          to="/About"
          className={(nav) => (nav.isActive ? "nav-active" : " ")}
        >
          <li>About</li>
        </NavLink>
        <NavLink
          to="/Faq"
          className={(nav) => (nav.isActive ? "nav-active" : " ")}
        >
          <li>FAQ</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
