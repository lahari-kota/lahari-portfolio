import React from "react";
import Projects from "../components/Projects";
import allProjectsData from "./../utils/projects";

function ProjectPage() {
  return (
    <div>
      <Projects
        comingProjects={allProjectsData}
        title={"Professional Projects"}
      />
    </div>
  );
}

export default ProjectPage;
