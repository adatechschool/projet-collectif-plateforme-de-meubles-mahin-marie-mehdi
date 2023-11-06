import React, { useState } from "react";
import { Link } from "react-router-dom";
import Password from "../components/Password";
import Email from "../components/Email";
import ConfirmPassword from "../components/ConfirmPassword";
import NameInscription from "../components/NameInscription";

// useState est une librairie React qui gère les "états" d'un composant (un état est une variable qui peut changer)
// et qui permet de rafraîchir le composant quand l'état change
const Inscription = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInscriptionClick = () => {
    if (password === confirmPassword) {
      // TODO TODO TODO TODO TODO TODO
      // Les mots de passe correspondent, effectuez l'inscription ici
      // Mettre ici la requête au serveur pour enregistrer les données de l'utilisateur
    } else {
      setErrorMessage("Les mots de passe ne correspondent pas");
    }
  };
  return (
    <>
      <div className="text-center">
        <h1>Inscription</h1>
        <NameInscription />
        <Email />
        <Password setPassword={setPassword} />
        <ConfirmPassword
          confirmPassword={confirmPassword}
          setConfirmPassword={setConfirmPassword}
        />
        <button
          className="btn btn-secondary btn-lg"
          onClick={handleInscriptionClick}
        >
          S'inscrire
        </button>
        <p className="text-center">
          Vous avez déjà un compte ?
          <Link to="/connexion" className="nav-link" id="signUp">
            Connectez-vous ici.
          </Link>
        </p>
        {errorMessage && <p>{errorMessage}</p>}
      </div>
    </>
  );
};

export default Inscription;
