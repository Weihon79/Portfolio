/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { useNavigate } from "react-router-dom";

const ReturnButtons = () => {
  const navigate = useNavigate();

  const handleReturnToTop = () => {
    navigate("/");
  };

  const handleReturnToProjects = () => {
    navigate("/");
    setTimeout(() => {
      const section = document.getElementById("projects");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <div className="return-btn">
      <button onClick={handleReturnToTop} className="return-btn__item">
        Retour à l'accueil
      </button>
      <button onClick={handleReturnToProjects} className="return-btn__item">
        Retour aux projets
      </button>
    </div>
  );
};

export default ReturnButtons;
