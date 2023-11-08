// Composant Password de la Connexion
const ConnexionPassword = () => {
  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "0vh" }}
    >
      <form style={{ width: "300px" }}>
        <div className="form-group text-center">
          <label htmlFor="inputPassword1">Mot de passe</label>
          <input
            type="password"
            id="inputPassword1"
            aria-describedby="passwordHelpInline"
            className="form-control"
          />
        </div>
      </form>
    </div>
  );
};

export default ConnexionPassword;
