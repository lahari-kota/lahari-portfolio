import React from "react";
import logo from "../assets/graduation-cap-solid.svg";
import { NavLink } from "react-router-dom";
import { navLinks } from "../utils/common";
import { PiListLight, PiListPlusLight } from "react-icons/pi";

function Navbar({ openSidebar }) {
  return (
    <div className="nav-container">
      <div className="nav-container-center">
        <div className="image-container">
          <img src={logo} alt="" className="src" />
        </div>

        <div className="links-container">
          <ul>
            {navLinks.map((eachLink) => {
              const { id, title, path } = eachLink;
              return (
                <NavLink
                  key={id}
                  className={({ isActive }) =>
                    isActive ? "links active" : "links"
                  }
                  to={path}
                >
                  {title}
                </NavLink>
              );
            })}
            {/* <NavLink
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
            </NavLink> */}
          </ul>
        </div>
        <div className="sidebar-open-icon">
          <button onClick={openSidebar}>
            <PiListPlusLight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
