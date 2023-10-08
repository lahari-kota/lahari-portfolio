import React from "react";
import logo from "../assets/graduation-cap-solid.svg";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="nav-container">
      <div className="nav-container-center">
        <div className="image-container">
          <img src={logo} alt="" className="src" />
        </div>

        <div className="links-container">
          <ul>
            <NavLink
              className={({ isActive }) =>
                isActive ? "links active" : "links"
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "links active" : "links"
              }
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "links active" : "links"
              }
              to="/projects"
            >
              Projects
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "links active" : "links"
              }
              to="/contactme"
            >
              Contact Me
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
