import React from "react";
import svgTools from "../assets/svg/svgTools.js";
import svgTech from "../assets/svg/svgFrameworks.js";

const Skills = () => {
  return (
    <section className="skills-background mb-3">
      <div className="skills content flex-center flex-column" id="skills">
        <h2 className="skills__title animate-on-load animate-delay-1">
          Compétences
        </h2>
        <div className="skills__content flex flex-wrap gap-2 w-100">
          <div className="skills__tools w-100 pd-1">
            <div className="skills__h3 animate-on-load animate-delay-2">
              <h3>Logiciels</h3>
            </div>
            <div className="skills__logos flex-center flex-wrap gap-2 animate-on-load animate-delay-3">
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

          <div className="skills__frameworks w-100 pd-1">
            <div className="skills__h3 animate-on-load animate-delay-4">
              <h3>Langages et Frameworks</h3>
            </div>
            <div className="skills__logos flex-center flex-wrap gap-2 animate-on-load animate-delay-5">
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
