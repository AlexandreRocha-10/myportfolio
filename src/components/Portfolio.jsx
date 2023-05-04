import React from "react";
import { projectsData } from "../data/projectsData";
import ProjectCard from "./ProjectCard";

function Portfolio() {
  const projects = projectsData;
  return (
	<div>
	  <p className="content is-medium">Portfolio</p>
	  <hr />
		<ProjectCard projects={projects} />
	</div>
  );
}

export default Portfolio;