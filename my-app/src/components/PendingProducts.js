import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import mockStockData from "./mockStockData";
import ValidateButton from "../components/ValidateButton";
import DeleteButton from "../components/DeleteButton";

function PendingProducts() {
  const [stockData, setStockData] = useState([]);

  useEffect(() => {
    // Pour l'instant j'utilise mon fichier mockStockData.js qui me permet de simuler l'appel API
    setStockData(mockStockData);
  }, []);

  const tableClass = stockData.length > 4 ? "container scrollable-table" : "";

  return (
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
    </div>
  );
}

export default PendingProducts;
