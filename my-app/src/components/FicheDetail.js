import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function FicheDetail() {
  const { id } = useParams();
  let [result, setResult] = useState({});
  // console.log({ id });
  useEffect(() => {
    axios
      .get(`http://localhost:8080/products/${id}`)
      .then((response) => {
        setResult(response.data);
        console.log(response);
        console.log(result);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, []);

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{result.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{result.price}</h6>
        <p className="card-text">Caractéristiques du produit :</p>
        <ul>
          <li>Dimensions :</li>
          <p>{result.dimensions}</p>
          <br></br>
          <li>Matériaux :</li>
          <p> {result.material}</p>
          <br></br>
          <li>Coloris : </li>
          <p>{result.color}</p>

          {/* <button
            type="button"
            className="btn"
            id="colorisBtn"
          ></button>{" "}
          <button
            type="button"
            className="btn btn-warning"
            id="colorisBtn"
          ></button>{" "}
          <button
            type="button"
            className="btn btn-success"
            id="colorisBtn"
          ></button>{" "}
          <button
            type="button"
            className="btn btn-danger"
            id="colorisBtn"
          ></button> */}
        </ul>
        <button className="btn btn-secondary m-2">Acheter maintenant</button>
        <button className="btn btn-secondary m-2">Ajouter au panier</button>
      </div>
    </div>
  );
}

export default FicheDetail;
