import Password from "../components/Password";
import Email from "../components/Email";
import ButtonConnexion from "../components/ButtonConnexion";

const Connexion = () => {
  return (
    <div className="text-center">
      <h1>Connexion</h1>
      <Email />
      <Password />
      <ButtonConnexion />
    </div>
  );
};

export default Connexion;
