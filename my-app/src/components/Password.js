// Composant Password
const Password = () => {
  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "0vh" }}
    >
      <form style={{ width: "300px" }}>
        <div className="form-group text-center">
          <label htmlFor="inputPassword6">Mot de passe</label>
          <input
            type="password"
            id="inputPassword6"
            aria-describedby="passwordHelpInline"
            className="form-control"
          />
        </div>
        <div className="form-group text-center">
          <button type="submit" className="btn btn-dark btn-lg">
            Se connecter
          </button>
        </div>
      </form>
    </div>
  );
};

export default Password;

// const Password = () => {
//   return (
//     <div className="container">
//       <form className="form-inline">
//         <div className="form-group">
//           <label for="exampleInputEmail1">Mot de passe</label>
//           <input
//             type="password"
//             id="inputPassword6"
//             aria-describedby="passwordHelpInline"
//             className="form-control"
//           ></input>
//         </div>
//         <div className="container">
//           <button type="submit" className="btn btn-dark btn-lg">
//             Se connecter
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Password;
