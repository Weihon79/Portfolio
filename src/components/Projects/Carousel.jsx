import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ProjectCard from "./ProjectCard";

function Carousel({ projets }) {
  const [startIndex, setStartIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(3);

  // Met à jour itemsPerSlide en fonction de la taille de l'écran
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerSlide(1); // Mobile
      } else if (window.innerWidth < 1024) {
        setItemsPerSlide(2); // Tablette
      } else {
        setItemsPerSlide(3); // Desktop
      }
    };

    // Écoute l'événement de redimensionnement de la fenêtre
    window.addEventListener("resize", handleResize);
    handleResize(); // Appel initial pour définir la valeur en fonction de la taille actuelle de l'écran

    return () => window.removeEventListener("resize", handleResize); // Nettoyage
  }, []);

  const handlePrev = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - itemsPerSlide, 0));
  };

  const handleNext = () => {
    setStartIndex((prevIndex) =>
      // eslint-disable-next-line prettier/prettier
      Math.min(prevIndex + itemsPerSlide, projets.length - itemsPerSlide)
    );
  };

  const visibleProjects = projets.slice(startIndex, startIndex + itemsPerSlide);

  return (
    <div className="carousel animate-on-load animate-delay-2">
      <button
        type="button"
        className="carousel__arrow left"
        onClick={(e) => {
          e.preventDefault();
          handlePrev();
        }}
        disabled={startIndex === 0}
      >
        <i className="fa-solid fa-angles-left"></i>
      </button>

      <div className="carousel__container">
        {visibleProjects.map((item) => (
          <ProjectCard key={item.id} projet={item} />
        ))}
      </div>

      <button
        type="button"
        className="carousel__arrow right"
        onClick={(e) => {
          e.preventDefault();
          handleNext();
        }}
        disabled={startIndex + itemsPerSlide >= projets.length}
      >
        <i className="fa-solid fa-angles-right"></i>
      </button>
    </div>
  );
}

Carousel.propTypes = {
  projets: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      githubLink: PropTypes.string.isRequired,
      detailsLink: PropTypes.string.isRequired,
      // eslint-disable-next-line prettier/prettier
    })
  ).isRequired,
};

export default Carousel;
