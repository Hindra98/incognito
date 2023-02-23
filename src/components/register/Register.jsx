import { EyeSlash, Eye} from "react-bootstrap-icons";
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

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./register.css";

const Register = () => {
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
    <div className="container register">
      <div className="row justify-content-center">
        <div className="col-md-6 text-center my-3">
          <h2 className="heading-section">Inscription à Incognito</h2>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="login-wrap p-4">
            <form action="#" className="signin-form">
              <div className="row">
                <div className="col-6 form-group my-3">
                  <input
                    type="email"
                    className="form-control email"
                    placeholder="Email"
                    name="email"
                    required
                  />
                </div>
                <div className="col-6 form-group my-3">
                  <input
                    type="text"
                    className="form-control pseudo"
                    placeholder="Pseudo"
                    name="pseudo"
                    required
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-6 form-group my-3">
                  <div className="form-group pass">
                    <input
                      id="password-field"
                      type={typePass}
                      className="form-control mdp"
                      placeholder="Mot de passe"
                      name="mdp"
                      required
                    />
                    <span className="field-icon" onClick={updateTypePass}>
                      {eye}
                    </span>
                  </div>
                </div>
                <div className="col-6 form-group my-3">
                  <div className="form-group pass">
                    <input
                      type={typePassR}
                      className="form-control mdp-repeat"
                      placeholder="Repeter mot de passe"
                      name="mdp-repeat"
                      required
                    />
                    <span className="field-icon" onClick={updateTypePassR}>
                      {eyeR}
                    </span>
                  </div>
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
};

export default Register;
