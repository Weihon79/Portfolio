import React from "react";
import portrait from "../assets/portrait_portfolio.webp";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__header">
        <h1>Ervan CHIN - Développeur - Frontend</h1>
      </div>

      <div className="hero__content">
        <div className="hero__photo">
          <img src={portrait} alt="Ervan CHIN" />
        </div>

        <div className="hero__presentation">
          <p>
            Passionné par le développement web moderne, je crée des interfaces
            Front-end à la fois esthétiques, responsives et accessibles.
            Actuellement en fin de formation chez OpenClassrooms, j’ai acquis de
            solides compétences en HTML, CSS, JavaScript et React. Curieux,
            rigoureux et autonome, je suis à la recherche d’opportunités pour
            intégrer une équipe dynamique ou collaborer sur des projets en
            freelance, afin de continuer à apprendre tout en apportant une vraie
            valeur ajoutée.
          </p>
          <div className="hero__resume">
            <a
              href="/assets/CV_Ervan_CHIN.pdf"
              className="btn btn--cv"
              download
            >
              Télécharger mon CV
            </a>
            <a
              href="https://www.linkedin.com/in/ton-profil"
              className="btn btn--linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              IN
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
