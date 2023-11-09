const NameInscription = ({setFirstName, setLastName}) => {
  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };
  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };
  return (
    <form style={{ width: "720px" }} className="container">
      <div className="container d-flex justify-content-center align-items-center">
        <div className="col-sm-6 my-1">
          <label>Nom</label>
          <input
            type="text"
            className="form-control"
            id="inlineFormInputName"
            placeholder="Nom"
            onChange = {handleFirstNameChange}
          />
        </div>
      </div>
      <div className="container d-flex justify-content-center align-items-center">
        <div className="col-sm-6 my-1">
          <label>Prénom</label>
          <input
            type="text"
            className="form-control"
            id="inlineFormInputName"
            placeholder="Prénom"
            onChange = {handleLastNameChange}
          />
        </div>
      </div>
    </form>
  );
};

export default NameInscription;
