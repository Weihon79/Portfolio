import React from "react";
import PropTypes from "prop-types";

function ProjectCard({ projet }) {
  return (
    <div className="project-card">
      <img src={projet.image} alt={projet.title} />
      <div className="project-card__description">
        <h2>{projet.title}</h2>
        <p>{projet.description}</p>
      </div>
    </div>
  );
}

// Validation des props
ProjectCard.propTypes = {
  projet: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectCard;
