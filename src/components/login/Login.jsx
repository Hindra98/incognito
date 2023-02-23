import { EyeSlash, Eye, CheckSquareFill, Square } from "react-bootstrap-icons";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import $ from "jquery";
import 'react-toastify/dist/ReactToastify.css';
import "./login.css";

const Login = () => {
  const [check, setCheck] = useState(<Square />);
  const [checkV, setCheckV] = useState("0");
  const [eye, setEye] = useState(<Eye />);
  const [typePass, setTypePass] = useState("password");
  const updateCheck = () => {
    if (checkV === "0") {
      setCheckV("1");
      setCheck(<CheckSquareFill />);
    } else {
      setCheckV("0");
      setCheck(<Square />);
    }
  };
  const updateTypePass = () => {
    if (typePass === "password") {
      setEye(<EyeSlash />);
      setTypePass("text");
    } else {
      setEye(<Eye />);
      setTypePass("password");
    }
  }

  const verif = () => {
    var $email = $('.login .email').val(), $pass = $('.login .password').val();
    var pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i
    if ($email === '' || $pass === '') {
      toast.error("Remplissez tous les champs SVP");
    } else if(!pattern.test($email)) {
      toast.error("L'adresse email n'est pas valide");
    } else {
      toast.success("Vous êtes connectés")
    }
  }

  return (
    <div className="container login">
      <div className="row justify-content-center">
        <div className="col-md-6 text-center my-3">
          <h2 className="heading-section">Connexion à Incognito</h2>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="login-wrap p-4">
            <form className="signin-form">
              <div className="form-group my-3">
                <input
                  type="email"
                  className="form-control email"
                  placeholder="E-mail"
                  required
                />
              </div>
              <div className="form-group pass my-3">
                <input
                  id="password-field"
                  type={typePass}
                  className="form-control password"
                  placeholder="Password"
                  required
                />
                <span className="field-icon" onClick={updateTypePass}>
                  {eye}
                </span>
              </div>
              <div className="form-group my-3">
                <button
                  type="button"
                  className="form-control btn btn-primary submit px-3"
                  onClick={verif}
                >
                  Se connecter
                </button>
                <ToastContainer />
              </div>
              <div className="form-group d-md-flex my-3 row">
                <div className="col-md-6 col-lg-6 text-lg-end text-sm-center col-sm-12">
                  <label className="checkbox-wrap checkbox-primary">
                    Se souvenir de moi
                    <input type="checkbox" onClick={updateCheck} />
                    <span className="checkmark">{check}</span>
                  </label>
                </div>
                <div className="col-md-6 col-lg-6 col-sm-12 text-lg-end text-sm-center">
                  <Link
                    to="/pass-oublie"
                    className=" text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out"
                  >
                    Mot de passe oublié
                  </Link>
                </div>
              </div>
            </form>
            <div className="social text-center">
              Vous n'avez pas de compte? &nbsp;
              <Link
                to="/inscription"
                className="text-red-600 hover:text-red-700 transition duration-200 ease-in-out ml-1"
              >
                Inscrivez-vous
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
