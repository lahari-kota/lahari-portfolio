import React from "react";
import githubIcon from "./../assets/github (1).svg";
import linkedinIcon from "../assets/linkedin (1).svg";
import instaIcon from "../assets/instagram (2).svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-section">
      <div className="footer-section-center">
        <div className="footer-links-container">
          <ul>
            <Link className="links" to="/">
              Home
            </Link>
            <Link className="links" to="/about">
              About
            </Link>
            <Link className="links" to="/projects">
              Projects
            </Link>
            <Link className="links" to="/contactme">
              Contact Me
            </Link>
            <Link className="links" to="/profile">
              Profile
            </Link>
          </ul>
        </div>
        <div className="footer-social-icons">
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
        <div className="copy-right">
          <p>
            Copyright ©2020 - 2023{" "}
            <a className="footer-link" href="">
              Lahari Kota
            </a>{" "}
            , Inc. All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
