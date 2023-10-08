import React from "react";
import deskIcon from "../assets/linus-mimietz-01hQvBUC7rI-unsplash (1).jpg";
import { Link } from "react-router-dom";

function AboutHero() {
  return (
    <div className="about-container ">
      <div className="about-container-center wrapper">
        <div className="left-side-container">
          <h3 className="name">
            my name is
            <br />
            <span className="my-name">Lahari Kota</span>
          </h3>

          <p className="about-me">
            Hi There, I'm Lahari and I am Front-End Web Developer. It's been 3
            Months, I'm working as a web developer. I have developed many
            websites. I'm also learning Back-End Development and looking forward
            to be a Full Stack Web Developer
          </p>

          <button className="about-btn">
            <Link to={"/projects"}>Explore Projects</Link>
          </button>
        </div>
        <div className="right-side-container">
          <div className="main-image">
            <img src={deskIcon} alt="" className="src" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutHero;
