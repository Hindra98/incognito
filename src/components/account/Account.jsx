import { EyeSlash, Eye } from "react-bootstrap-icons";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import OAuth from "../OAuth";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { db } from "../../firebase";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./account.css";

export default function Account() {
  const [eye, setEye] = useState(<Eye />);
  const [typePass, setTypePass] = useState("password");
  const [eyeR, setEyeR] = useState(<Eye />);
  const [typePassR, setTypePassR] = useState("password");
  const updateTypePass = () => {
    if (typePass === "password") {
      setEye(<EyeSlash />);
      setTypePass("text");
    } else {
      setEye(<Eye />);
      setTypePass("password");
    }
  };
  const updateTypePassR = () => {
    if (typePassR === "password") {
      setEyeR(<EyeSlash />);
      setTypePassR("text");
    } else {
      setEyeR(<Eye />);
      setTypePassR("password");
    }
  };
  return (
    <div className="container account">
      <div className="row justify-content-center">
        <div className="col-md-6 text-center my-3">
          <h2 className="heading-section">Parlez nous de vous</h2>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="login-wrap p-4">
            <form action="#" className="signin-form">
              <div className="row">
                <div className="col-6 form-group my-3">
                  <input
                    type="text"
                    className="form-control age"
                    placeholder="Votre âge"
                    name="age"
                    required
                  />
                </div>
                <div className="col-6 form-group my-3">
                  <input
                    type="text"
                    className="form-control ville"
                    placeholder="Votre ville"
                    name="ville"
                    required
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-6 form-group my-3">
                  <input
                    type="text"
                    className="form-control whatsapp"
                    placeholder="Votre téléphone whatsapp"
                    name="whatsapp"
                  />
                </div>
                <div className="col-6 form-group my-3">
                  <input
                    type="text"
                    className="form-control tel"
                    placeholder="Autre tél"
                    name="tel"
                  />
                </div>
              </div>

              <div className="form-group my-3">
                <span>Sexe : </span>
                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    name="sexe"
                    value="M"
                    id="masculin"
                  />
                  <label className="form-check-label" htmlFor="masculin">
                    M
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="radio"
                    className="form-check-input"
                    name="sexe"
                    value="F"
                    id="feminin"
                  />
                  <label className="form-check-label" htmlFor="feminin">
                    F
                  </label>
                </div>
              </div>

              <div className="form-group my-3">
                <button
                  type="submit"
                  className="form-control btn btn-primary submit px-3"
                >
                  S'inscrire
                </button>
              </div>
            </form>
            <div className="social text-center">
              Vous avez déjà de compte? &nbsp;
              <Link
                to="/connexion"
                className="text-red-600 hover:text-red-700 transition duration-200 ease-in-out ml-1"
              >
                Connectez-vous
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
