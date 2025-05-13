import React from "react";
import PropTypes from "prop-types";

function ProjectCard({ projet }) {
  // Vérifie si 'images' existe et est un tableau
  const imageSrc = Array.isArray(projet.images)
    ? projet.images[0]
    : projet.image;

  return (
    <div className="project-card">
      <img src={imageSrc} alt={projet.title} />
      <div className="project-card__description">
        <h2>{projet.title}</h2>
        <div className="project-card__buttons">
          <a
            href={projet.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card__btn"
          >
            Lien vers Github
          </a>
          <a href={projet.detailsLink} className="project-card__btn">
            Voir détails
          </a>
        </div>
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
    image: PropTypes.string, // Image unique ou tableau
    images: PropTypes.arrayOf(PropTypes.string), // Tableau d'images
    githubLink: PropTypes.string.isRequired,
    detailsLink: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectCard;
