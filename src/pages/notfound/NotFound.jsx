/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>La page que vous cherchez n'existe pas.</p>
      <Link to="/" className="btn">
        Retour à l'accueil
      </Link>
    </div>
  );
}
