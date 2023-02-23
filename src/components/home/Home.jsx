import React from 'react';
import { Link } from "react-router-dom";
import { Twitter, Facebook, Whatsapp } from "react-bootstrap-icons";
import Logo from "../../logo_r.png";
import "./home.css";

const Component = () => {
return(
  <div className='home'>
    <div className='logo my-2'>
      <img src={Logo} alt="Incognito" />
    </div>
    <div className='titre my-3'>
      <h2>Incognito</h2><br/>
      <h4>Trouvez votre plan d'un soir</h4>
    </div>
    <div className='boutons my-5'>
      <Link className='mx-3 w-25 btn btn-primary submit px-2' to="./connexion"> Je me connecte</Link>
      <Link className='mx-3 w-25 btn btn-primary submit px-2' to="./inscription"> Je m'inscris</Link>
    </div>
    <footer className='mt-5'>
      <a href='twitter' className='mx-3'><Twitter/></a>
      <a href='facebook' className='mx-3'><Facebook/></a>
      <a href='whatsapp' className='mx-3'><Whatsapp/></a>
    </footer>
     
  </div>
)
}

export default Component