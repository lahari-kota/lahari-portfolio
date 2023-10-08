import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Features from "../components/Features";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import allProjectsData from "./../utils/projects";

function Home() {
  const [featuredProjects, setFeaturedProjects] = useState([]);

  console.log("fea", featuredProjects);

  useEffect(() => {
    const fewProjects = allProjectsData.filter(
      (eachProject) => eachProject.featured === true
    );
    setFeaturedProjects(fewProjects);
  }, [allProjectsData]);

  return (
    <>
      <About />
      <Projects
        comingProjects={featuredProjects}
        title={"Featured Projects"}
        showMore={true}
      />
    </>
  );
}

export default Home;
