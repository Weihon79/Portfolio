import React from "react";
import logo from "../assets/Logo_react_yinyang_portfolio.webp";
import { Link, useLocation } from "react-router-dom";
import ReturnButtons from "../components/Buttons/ReturnButtons";

const Navbar = () => {
  const location = useLocation();
  const isDetailPage = location.pathname.startsWith("/projets/");

  return (
    <header className="header-background">
      <nav className="navbar content animate-on-load">
        <Link to="/" className="navbar__item navbar__logo">
          <img src={logo} alt="Logo principal" title="Mon Logo" />
        </Link>

        {isDetailPage ? (
          <ReturnButtons />
        ) : (
          <>
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
          </>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
