import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src="./assets/Logo_react_yinyang_portfolio.webp"></img>
      </div>
    </nav>
  );
};

export default Navbar;
