import React, { useState, useEffect } from "react";
import mockProductData from "./mockProductData";
import logo from "../assets/images/COPMEBA.png";

function CardsGenerator() {
  const [stockData, setStockData] = useState([]);

  useEffect(() => {
    // Pour l'instant j'utilise mon fichier mockStockData.js qui me permet de simuler l'appel API
    setStockData(mockProductData);
  }, []);

  // const tableClass = stockData.length > 3 ? "container scrollable-table" : "";
  // TODO : ici il faut réussir à trouver un code qui permette de généré une nouvelle ligne de 3 cartes,
  // lorsque la ligne en cours comporte déjà trois éléments.

  return (
    <div
      className="container-fluid"
      Style="display: flex; justify-content=flex-start"
    >
      {stockData.map((product) => (
        <div className="card col-md-4" Style="width: 18rem; margin:0.5rem">
          <img
            className="card-img-top"
            src={logo}
            // on mettra product.image à la place de logo ici pour afficher l'image en lien avec le produit.
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">{product.description}</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">{product.dimension}</li>
            <li className="list-group-item">{product.material}</li>
            <li className="list-group-item">{product.color}</li>
          </ul>
        </div>

        // <div id="card" className="card bg-dark text-white">
        //   <img className="card-img" src={logo} alt="Card image" />
        //   <div className="card-img-overlay">
        //     <h5 className="card-title">{product.name}</h5>
        //     <p className="card-text">{product.description}</p>
        //     <p className="card-text">{product.material}</p>
        //   </div>
        // </div>
      ))}
    </div>
    /* 
    <div>
      <h2 className="container"> PRODUITS EN ATTENTE</h2>
      <div className={tableClass}>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nom du Produit</th>
              <th>Quantité</th>
              <th>Date de Création</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {stockData.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.nom_du_produit}</td>
                <td>{product.quantité}</td>
                <td>{product.date_de_création}</td>

                <ValidateButton />

                <DeleteButton />
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div> */
  );
}

export default CardsGenerator;
