import ConnexionPassword from "../components/ConnexionPassword";
import Email from "../components/Email";
import ButtonConnexion from "../components/ButtonConnexion";

const Connexion = () => {
  return (
    <div className="text-center">
      <h1>Connexion</h1>
      <Email />
      <ConnexionPassword />
      <ButtonConnexion />
    </div>
  );
};

export default Connexion;
