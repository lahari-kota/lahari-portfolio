import React from "react";

function Skills() {
  return (
    <div className="skills-card-container">
      <div className="skills-container ">
        <div className="skills-container-center wrapper">
          <h3 className="heading">Technical Skills</h3>
          <hr className="underline"></hr>
        </div>
      </div>
      <div className="listof-skills-container wrapper">
        <div className="skills-card">
          <div className="skills-card-center">
            <h3 className="heading-container">Web Technologies</h3>
            <div className="skills-btn-container">
              <button className="each-btn">HTML</button>
              <button className="each-btn">HTML5</button>
              <button className="each-btn">CSS</button>
              <button className="each-btn">CSS3</button>
              <button className="each-btn">Javascript</button>
              <button className="each-btn">ReactJs</button>
            </div>
          </div>
        </div>

        <div className="skills-card">
          <div className="skills-card-center">
            <h3 className="heading-container">Programming & Services</h3>
            <div className="skills-btn-container">
              <button className="each-btn">Java</button>
              <button className="each-btn">Data Structures</button>
              <button className="each-btn">JSON</button>
            </div>
          </div>
        </div>

        <div className="skills-card">
          <div className="skills-card-center">
            <h3 className="heading-container">Devops</h3>
            <div className="skills-btn-container">
              <button className="each-btn">Git</button>
              <button className="each-btn">Docker</button>
            </div>
          </div>
        </div>
        <div className="skills-card">
          <div className="skills-card-center">
            <h3 className="heading-container">Operating Systems</h3>
            <div className="skills-btn-container">
              <button className="each-btn">Windows</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
