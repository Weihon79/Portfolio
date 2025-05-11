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
    <div className="details">
      <Navbar />
      <section className="details__header">
        <h1>{project.title}</h1>
        <img src={project.image} alt={project.title} />
        <p>{project.description}</p>
        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
          Voir le code sur GitHub
        </a>
      </section>
    </div>
  );
}
