import React, { useState } from "react";
import Password from "../components/Password";
import Email from "../components/Email";
import ConfirmPassword from "../components/ConfirmPassword";
import NameInscription from "../components/NameInscription";

const Inscription = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInscriptionClick = () => {
    if (password === confirmPassword) {
      // TODO
      // Les mots de passe correspondent, effectuez l'inscription ici
      // Mettre ici la requête au serveur pour enregistrer les données de l'utilisateur
    } else {
      setErrorMessage("Les mots de passe ne correspondent pas");
    }
  };
  return (
    <div className="text-center">
      <h1>Inscription</h1>
      <NameInscription />
      <Email />
      <Password setPassword={setPassword} />
      <ConfirmPassword
        confirmPassword={confirmPassword}
        setConfirmPassword={setConfirmPassword}
      />
      <button className="btn btn-dark btn-lg" onClick={handleInscriptionClick}>
        S'inscrire
      </button>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default Inscription;
