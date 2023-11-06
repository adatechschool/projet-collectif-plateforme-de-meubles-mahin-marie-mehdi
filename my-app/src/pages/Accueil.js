import React, { useState, useEffect } from "react";
import mockProductData from "./mockProductData";
import logo from "../assets/images/COPMEBA.png";
import { Link } from "react-router-dom";

function CardsGenerator() {
  const [stockData, setStockData] = useState([]);

  useEffect(() => {
    // Pour l'instant j'utilise mon fichier mockStockData.js qui me permet de simuler l'appel API
    setStockData(mockProductData);
  }, []);

  // Définissez le nombre de colonnes par ligne (4 ou 5, selon votre choix)
  const columnsPerRow = 4;

  return (
    <div className="container-fluid">
      <div className="row">
        {stockData.map((product, index) => (
          <div key={index} className={`col-md-${12 / columnsPerRow}`}>
            <Link to="/DetailPage">
              <div className="card" style={{ width: "100%", margin: "0.5rem" }}>
                <img
                  className="card-img-top"
                  src={logo}
                  alt="Carte des meubles"
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
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardsGenerator;

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
//     </div> */
//   );
// }

// export default CardsGenerator;
