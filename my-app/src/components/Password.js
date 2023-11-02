// Composant Password
const Password = ({ setPassword }) => {
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
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
            onChange={handlePasswordChange}
          />
        </div>
      </form>
    </div>
  );
};

export default Password;
