import React, { useState, useEffect } from "react";
import ConnexionPassword from "../components/ConnexionPassword";
import { Link } from "react-router-dom";
import Email from "../components/Email";
import axios from "axios";

const Connexion = () => {
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [email, setEmail] = useState("");

  // appel api à réaliser
  const [stockData, setStockData] = useState([]);

  const HandleConnexionClick = (email) => {


    {/* Replaced teh mock data with an appel to the API endpoint for products using axios */}
    useEffect((email) => {
      axios.get(`http://localhost:8080/user/:${email}`)
        .then(response => {
          setStockData(response.data);
          console.log(response.data);
        })
        .catch(error => {
          console.error('There was an error!', error);
        });
    }, []);

    if (password === stockData.password) {
      // TODO TODO TODO TODO TODO TODO
      // Les mots de passe correspondent, effectuez l'inscription ici
      // Mettre ici la requête au serveur pour enregistrer les données de l'utilisateur
      setErrorMessage("Vous êtes connecté");
    } else {
      setErrorMessage("Echec de la connexion, veuillez vérifier vos identifiant");
    }
  }

  return (
    <div className="text-center">
      <h1>Connexion</h1>
      <Email setEmail={setEmail}/>
      <ConnexionPassword setPassword={setPassword} />
      <button
          className="btn btn-secondary btn-lg"
          onClick={HandleConnexionClick}
        >
          Se connecter
        </button>
      <p className="text-center">
        Vous n'avez pas de compte ?
        <Link to="/inscription" className="nav-link" id="signIn">
          Inscrivez-vous ici.
        </Link>
      </p>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default Connexion;
