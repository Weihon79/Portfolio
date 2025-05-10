import React from "react";
import logo from "../assets/Logo_react_yinyang_portfolio.webp";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar__item navbar__logo">
        <img src={logo} alt="Logo principal" title="Mon Logo" />
      </Link>
      <div className="navbar__item">
        <a href="#about">À propos</a>
      </div>
      <div className="navbar__item">
        <a href="#skills">Compétences</a>
      </div>
      <div className="navbar__item">
        <a href="#projects">Projets</a>
      </div>
      <div className="navbar__item">
        <a href="#contact">Contact</a>
      </div>
      <div className="navbar__theme-toggle">
        <button
          className="theme-btn theme-btn--light"
          aria-label="Activer le thème clair"
        >
          <i className="fas fa-sun"></i>
        </button>
        <button
          className="theme-btn theme-btn--dark"
          aria-label="Activer le thème sombre"
        >
          <i className="fas fa-moon"></i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
