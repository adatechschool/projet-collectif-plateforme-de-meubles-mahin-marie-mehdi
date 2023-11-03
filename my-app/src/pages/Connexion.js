import ConnexionPassword from "../components/ConnexionPassword";
import { Link } from "react-router-dom";
import Email from "../components/Email";
import ButtonConnexion from "../components/ButtonConnexion";

const Connexion = () => {
  return (
    <div className="text-center">
      <h1>Connexion</h1>
      <Email />
      <ConnexionPassword />
      <ButtonConnexion />
      <p className="text-center">
        Vous n'avez pas de compte ?
        <Link to="/inscription" className="nav-link">
          Inscrivez-vous ici.
        </Link>
      </p>
    </div>
  );
};

export default Connexion;
