import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

const NoPage = () => {
  return (
    <div className="home">
      <h1 className="display-1 my-4">Erreur 404</h1>
      <h1 className="display-5 my-4">Page non trouvée</h1>
      <div className="boutons mt-5">
        <Link to={"/"} className="link">
          Revenir à l'accueil
        </Link>
      </div>
    </div>
  );
};

export default NoPage;
