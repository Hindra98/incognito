
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Session from 'react-session-api'
import Home from './components/home/Home';
// import Navbar from './components/Navbar';
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Account from "./components/account/Account";
import PassOublie from "./components/pass_oublie/PassOublie";
import NoPage from "./components/home/NoPage";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

Session.set('email', null);
Session.set('token', null);
Session.set('state', 'error');
localStorage.setItem('state', JSON.stringify({'state': 'error', 'email': null, 'token': null}));

function App() {

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("state")).token === "success") {
      Session.set("pseudo", JSON.parse(localStorage.getItem("state")).pseudo);
      Session.set("token", JSON.parse(localStorage.getItem("state")).token);
      Session.set("state", "success");
    }
    // axios.get('http://localhost:4000/connexion')
    //     .then((response) => {
    //         // setconnexionDatas(response.data)
    //         // setRecResultData(response.data)
    //         console.log('')
    //     })
  }, []);
  // const notify = () => toast.error("Something went wrong with the registration");

  return (
    <div>
      {/* <Navbar /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profil" element={<Account />} />
          <Route path="/connexion" element={<Login />} />
          <Route path="/inscription" element={<Register />} />
          <Route path="/account" element={<Account />} />
          <Route path="/pass-oublie" element={<PassOublie />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
      <div>
        {/* <button onClick={notify}>Notify!</button>
        <ToastContainer /> */}
      </div>
    </div>
  );
}

export default App;
