import React, { useState } from "react";
import ConnexionPassword from "../components/ConnexionPassword";
import { Link } from "react-router-dom";
import Email from "../components/Email";
import axios from "axios";

const Connexion = () => {
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [email, setEmail] = useState("");

  // Appel à l'API pour obtenir les données utilisateur

  const HandleConnexionClick = () => {
    axios
      .get(`http://localhost:8080/user/${email}`)
      .then((response) => {
        // On récupère la réponse sous forme d'objet. On un seul objet en fonction de l'email.
        if (response.data && password === response.data.password) {
          // Ici on s'assure que response.data existe, puis on compare l'input au mot de passe dans la bdd
          setErrorMessage("Vous êtes connecté");
        } else {
          setErrorMessage(
            "Échec de la connexion, veuillez vérifier vos identifiants"
          );
        }
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };

  return (
    <div className="text-center">
      <h1>Connexion</h1>
      <Email setEmail={setEmail} />
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
