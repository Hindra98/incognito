import React from "react";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./passOublie.css";
const PassOublie = () => {
  return (
    <div className="container login">
      <div className="row justify-content-center">
        <div className="col-md-6 text-center my-3">
          <h2 className="heading-section">Retrouvez votre mot de passe</h2>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="login-wrap p-4">
            <form action="#" className="signin-form">
              <div className="form-group my-4">
                <input
                  type="email"
                  className="form-control"
                  placeholder="E-mail"
                  required
                />
              </div>

              <div className="form-group">
                <button
                  type="submit"
                  className="form-control btn btn-primary submit px-2"
                >
                  Valider
                </button>
              </div>
            </form>
            <div className="mx-auto my-4">
              <Link
                to="/connexion"
                className="text-red-600 hover:text-red-700 transition duration-200 ease-in-out ml-1"
              >
                Connectez-vous
              </Link>
              <Link
                to="/inscription"
                className="float-end text-red-600 hover:text-red-700 transition duration-200 ease-in-out ml-1"
              >
                Inscrivez-vous
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PassOublie;
