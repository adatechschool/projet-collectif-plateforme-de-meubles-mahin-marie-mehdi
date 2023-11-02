const Email = () => {
  return (
    <form className="align-middle">
      <label for="exampleInputEmail1">Email address</label>
      <div className="form-row align-items-center">
        <div className="col-sm-3 my-1">
          <label className="sr-only" for="inlineFormInputName">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="inlineFormInputName"
            placeholder="mail"
          ></input>
        </div>
        <div className="col-sm-3 my-1">
          <label className="sr-only" for="inlineFormInputGroupUsername">
            Username
          </label>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text">@</div>
            </div>
            <input
              type="text"
              className="form-control"
              id="inlineFormInputGroupUsername"
              placeholder="gmail.com"
            ></input>
          </div>
        </div>
        <div className="col-auto my-1">
          <button type="submit" className="btn btn-dark btn-lg">
            Se connecter
          </button>
        </div>
      </div>
    </form>
  );
};

export default Email;
