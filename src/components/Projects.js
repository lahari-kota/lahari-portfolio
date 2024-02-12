import React, { useState, useEffect } from "react";
import linkIcon from "../assets/arrow-up-right-from-square-solid.svg";
import allProjectsData from "../utils/projects";
import { Link } from "react-router-dom";

function Projects({
  comingProjects = [],
  title = "Projects",
  showMore = false,
}) {
  const [projectData, setProjectData] = useState(comingProjects || []);

  useEffect(() => {
    setProjectData(comingProjects);
  }, [comingProjects]);

  console.log(projectData);
  return (
    <div className="projects-container wrapper">
      <div className="projects-container-center">
        <h3 className="heading">{title}</h3>
        <hr className="underline"></hr>
        <div className="listof-projects-container">
          {projectData.map((eachProject) => {
            return (
              <div key={eachProject.id} className="card-container">
                <div className="card-container-center">
                  <div className="image-container">
                    <img src={eachProject.thumbnail} alt="" className="src" />
                  </div>
                  <div className="each-card">
                    <h3 className="heading-container">
                      {eachProject.projectName}
                    </h3>
                    <div className="tech-container">
                      {eachProject.technologies.map((eachTech, index) => {
                        return (
                          <button key={index} className="each-btn">
                            {eachTech}
                          </button>
                        );
                      })}
                    </div>
                    <div className="link-icon-container">
                      <div className="each-link-container">
                        <a className="each-link" href={eachProject.url}>
                          Live
                        </a>
                        <img src={linkIcon} alt="" className="src" />
                      </div>
                      <div className="each-link-container">
                        <a className="each-link" href={eachProject.url}>
                          View
                        </a>
                      </div>
                      <div className="each-link-container">
                        <a className="each-link" href={eachProject.gitUrl}>
                          Github
                        </a>
                        <img src={linkIcon} alt="" className="src" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {showMore && (
          <div className="show-more-btn">
            <Link to={"/projects"}>showMore</Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Projects;
