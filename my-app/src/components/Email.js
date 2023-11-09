// Composant Email
const Email = ({ setEmail }) => {
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ minHeight: "0vh" }}
    >
      <form style={{ width: "300px" }}>
        <div className="form-group text-center">
          <label>Email</label>
          <input
            type="text"
            className="form-control"
            id="inlineFormInputEmail"
            placeholder="exemple@exemple.com"
            onChange={handleEmailChange}
          />
        </div>
      </form>
    </div>
  );
};

export default Email;

// const Email = () => {
//   return (
//     <div className="container">
//       <form className="align-middle">
//         <label for="exampleInputEmail1">Email address</label>
//         <div className="form-row align-items-center">
//           <div className="col-sm-3 my-1">
//             <label className="sr-only" for="inlineFormInputName">
//               Name
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               id="inlineFormInputName"
//               placeholder="mail"
//             ></input>
//           </div>
//           <div className="col-sm-3 my-1">
//             <label className="sr-only" for="inlineFormInputGroupUsername">
//               Username
//             </label>
//             <div className="input-group">
//               <div className="input-group-prepend">
//                 <div className="input-group-text">@</div>
//               </div>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="inlineFormInputGroupUsername"
//                 placeholder="gmail.com"
//               ></input>
//             </div>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Email;
