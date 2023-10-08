import React from "react";
import { FaMobileAlt } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";
import { BiLogoGmail } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import githubIcon from "./../assets/github (1).svg";
import linkedinIcon from "../assets/linkedin (1).svg";
import instaIcon from "../assets/instagram (2).svg";

function ContactMe() {
  return (
    <div className="contact-card-container">
      <div className="contact-container wrapper">
        <h3 className="heading">contact me</h3>
        <hr className="underline"></hr>
        <div className="contact-container-center">
          <di v className="leftside-container">
            <a className="information" href="">
              <FaMobileAlt /> +91 7989657772
            </a>

            <a className="information" href="">
              <BiWorld />
              https://kotalahari.netlify.app/
            </a>

            <a className="information" href="">
              <BiLogoGmail />
              kotalahari123@gmail.com
            </a>

            <a className="information" href="">
              <FaLocationDot />
              hyderabad, telangana, india
            </a>

            <div className="contact-social-icons">
              <a href="https://github.com/lahari-kota" target="_blank">
                <img src={githubIcon} alt="" className="social-icon" />
              </a>
              <a
                href="https://www.linkedin.com/in/kota-lahari-a4a776242/"
                target="_blank"
              >
                <img src={linkedinIcon} alt="" className="social-icon" />
              </a>
              <a
                href="https://www.instagram.com/lahariii_kota/"
                target="_blank"
              >
                <img src={instaIcon} alt="" className="social-icon" />
              </a>
            </div>
          </di>
          <div className="rightside-container">
            <div className="input-container">
              <input
                className="input"
                type="text"
                placeholder="enter your name"
              />
            </div>
            <div className="input-container">
              <input
                className="input"
                type="text"
                placeholder="enter your mail"
              />
            </div>
            <div className="input-container">
              <textarea
                className="inputs"
                name="text"
                placeholder="enter your message"
              />
            </div>

            <div className="btn-container">
              <button className="submit-btn">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
