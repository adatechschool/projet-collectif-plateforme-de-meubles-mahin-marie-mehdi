import Password from "../components/Password";
import Email from "../components/Email";
import ButtonInscription from "../components/ButtonInscription";
import ConfirmPassword from "../components/ConfirmPassword";
import NameInscription from "../components/NameInscription";

const Inscription = () => {
  return (
    <div className="text-center">
      <h1>Inscription</h1>
      <NameInscription />
      <Email />
      <Password />
      <ConfirmPassword />
      <ButtonInscription />
    </div>
  );
};

export default Inscription;
