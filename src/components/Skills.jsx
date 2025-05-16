import React from "react";
import svgTools from "../assets/svg/svgTools.js";
import svgTech from "../assets/svg/svgFrameworks.js";

const Skills = () => {
  return (
    <section className="skills-background">
      <div className="skills content" id="skills">
        <h2 className="skills__title">Compétences</h2>
        <div className="skills__content">
          <div className="skills__tools">
            <div className="skills__h3">
              <h3>Logiciels</h3>
            </div>
            <div className="skills__logos">
              {Object.entries(svgTools).map(([name, { src, url }]) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`Voir la doc ${name}`}
                >
                  <img src={src} alt={name} />
                </a>
              ))}
            </div>
          </div>

          <div className="skills__frameworks">
            <div className="skills__h3">
              <h3>Langages et Frameworks</h3>
            </div>
            <div className="skills__logos">
              {Object.entries(svgTech).map(([name, { src, url }]) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`Voir la doc ${name}`}
                >
                  <img src={src} alt={name} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
