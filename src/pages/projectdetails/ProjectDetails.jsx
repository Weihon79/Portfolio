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

  // Vérifie si l'image est un tableau ou une seule image
  const images = Array.isArray(project.images)
    ? project.images
    : [project.image];

  return (
    <div>
      <Navbar />
      <div className="details-background">
        <section className="details content">
          <h1>{project.title}</h1>
          <div className="details__description">
            <div className="details__description__image-container">
              {/* Si images est un tableau, afficher toutes les images */}
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                />
              ))}
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
            {/* Vérification si projectLink existe avant d'afficher l'iframe */}
            {project.projectLink && (
              <iframe
                src={project.projectLink}
                title={`Aperçu de ${project.title}`}
                width="100%"
                height="600"
                style={{
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  marginTop: "1rem",
                  backgroundColor: "white",
                }}
                loading="lazy"
              />
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
