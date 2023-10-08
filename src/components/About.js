import React from "react";
import githubIcon from "./../assets/github (1).svg";
import linkedinIcon from "../assets/linkedin (1).svg";
import instaIcon from "../assets/instagram (2).svg";
import deskIcon from "../assets/linus-mimietz-01hQvBUC7rI-unsplash (1).jpg";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="main-container wrapper">
      <div className="main-container-center">
        <div className="left-side-container">
          <h3 className="name">i'm Lahari</h3>
          <h3 className="role">Frontend Developer</h3>
          <div className="social-icons">
            <a href="https://github.com/lahari-kota" target="_blank">
              <img src={githubIcon} alt="" className="social-icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/kota-lahari-a4a776242/"
              target="_blank"
            >
              <img src={linkedinIcon} alt="" className="social-icon" />
            </a>
            <a href="https://www.instagram.com/lahariii_kota/" target="_blank">
              <img src={instaIcon} alt="" className="social-icon" />
            </a>
          </div>
          <button className="about-btn">
            <Link to={"/about"}>more about lahari</Link>
          </button>
        </div>
        <div className="right-side-container">
          <div className="home-main-image">
            <img src={deskIcon} alt="" className="src" />
            <div className="home-small-image">
              <img
                src="https://plus.unsplash.com/premium_photo-1661717597888-360061c30a4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
