import React from "react";
import logo from "./../assets/graduation-cap-solid.svg";
import { NavLink } from "react-router-dom";
import { navLinks } from "../utils/common";
import { RxCross2 } from "react-icons/rx";

const Sidebar = ({ showSidebar, closeSidebar }) => {
  return (
    <div className={`sidebar-container ${showSidebar ? "opened-sidebar" : ""}`}>
      <div className="sidebar-container-center">
        <div className="sidebar-header">
          <div className="image-container">
            <img src={logo} alt="" className="src" />
          </div>
          <div className="sidebar-close-icon">
            <button onClick={closeSidebar}>
              <RxCross2 />
            </button>
          </div>
        </div>

        <div className="sidebar-links-container">
          <ul>
            {navLinks.map((eachLink) => {
              const { id, title, path } = eachLink;
              return (
                <NavLink
                  key={id}
                  className={({ isActive }) =>
                    isActive ? "links active" : "links"
                  }
                  onClick={closeSidebar}
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
      </div>
    </div>
  );
};

export default Sidebar;
