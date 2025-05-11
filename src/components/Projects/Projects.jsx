/* eslint-disable prettier/prettier */
import React from "react";
import PropTypes from "prop-types";
import Carousel from "./Carousel";

function Projects({ projet }) {
  return (
    <section className="projects" id="projects">
      <h2>Mes projets</h2>
      <Carousel projets={projet} />
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
