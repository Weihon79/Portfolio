/* eslint-disable prettier/prettier */
import React from "react";
import PropTypes from "prop-types";
import Carousel from "./Carousel";

function Projects({ projet }) {
  return (
    <section className="projects-background">
      <div className="projects content flex-center flex-column" id="projects">
        <h2 className="animate-on-load">Mes projets</h2>
        <Carousel projets={projet} />
      </div>
    </section>
  );
}

// Validation des props
Projects.propTypes = {
  projet: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      githubLink: PropTypes.string.isRequired,
      detailsLink: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Projects;
