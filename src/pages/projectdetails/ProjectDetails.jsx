import React from "react";
import { useParams, Navigate } from "react-router-dom";
import projects from "../../data/projetData.json";
import Navbar from "../../components/Header";

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((p) => p.detailsLink === `/projets/${id}`);

  if (!project) {
    return <Navigate to="/404" />;
  }

  return (
    <div>
      <Navbar />
      <section className="details">
        <h1>{project.title}</h1>
        <div className="details__description">
          <div className="details__description__image-container">
            <img src={project.image} alt={project.title} />
          </div>
          <div className="details__description__text-container">
            <p style={{ whiteSpace: "pre-line" }}>{project.description}</p>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Voir le code sur GitHub
            </a>
          </div>
          <iframe
            src={project.projectLink}
            title={`Aperçu de ${project.name}`}
            width="100%"
            height="600"
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              marginTop: "1rem",
            }}
            loading="lazy"
          />
        </div>
      </section>
    </div>
  );
}
