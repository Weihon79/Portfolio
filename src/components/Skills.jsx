import React from "react";
import tools from "../assets/svg/svgTools.js";
import frameworks from "../assets/svg/svgFrameworks.js";

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2 className="skills__title">Compétences</h2>
      <div className="skills__content">
        <div className="skills__tools">
          <div className="skills__h3">
            <h3>Logiciels</h3>
          </div>
          <div className="skills__logos">
            {Object.entries(tools).map(([name, src]) => (
              <img
                key={name}
                src={src}
                alt={name}
                style={{ width: "50px", height: "50px", objectFit: "contain" }}
              />
            ))}
          </div>
        </div>

        <div className="skills__frameworks">
          <div className="skills__h3">
            <h3>Langages et Frameworks</h3>
          </div>
          <div className="skills__logos">
            {Object.entries(frameworks).map(([name, src]) => (
              <img
                key={name}
                src={src}
                alt={name}
                style={{ width: "50px", height: "50px", objectFit: "contain" }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
