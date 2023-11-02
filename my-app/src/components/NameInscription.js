const NameInscription = () => {
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
          />
        </div>
      </div>
    </form>
  );
};

export default NameInscription;
