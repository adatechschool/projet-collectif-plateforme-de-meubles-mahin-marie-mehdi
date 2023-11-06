import React from "react";

function ficheDetail() {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Nom du produit</h5>
        <h6 className="card-subtitle mb-2 text-muted">350€</h6>
        <p className="card-text">Caractéristiques du produit :</p>
        <ul>
          <li>Catégorie</li>
          <li>Dimensions</li>
          <li>Matériaux :</li>
          <li>Coloris :</li>{" "}
          <button
            type="button"
            className="btn btn-primary"
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
          ></button>
        </ul>
        <button className="btn btn-secondary m-2">Acheter maintenant</button>
        <button className="btn btn-secondary m-2">Ajouter au panier</button>
      </div>
    </div>
  );
}

export default ficheDetail;
