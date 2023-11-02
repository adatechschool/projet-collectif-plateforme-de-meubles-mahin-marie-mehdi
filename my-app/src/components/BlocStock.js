// Ce composant est utilisé dans la page Admin.js
import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import mockStockData from "./mockStockData";
import ModifyButton from "../components/ModifyButton";
import DeleteButton from "../components/DeleteButton";

function BlocStock() {
  const [stockData, setStockData] = useState([]);

  useEffect(() => {
    // Pour l'instant j'utilise mon fichier mockStockData.js qui me permet de simuler l'appel API
    // TODO : Modifier l'appel API pour obtenir l'affichage des données souhaitées.
    // La boucle qui permet de créer les lignes est déjà réalisé.
    setStockData(mockStockData);
  }, []);

  const tableClass = stockData.length > 4 ? "container scrollable-table" : "";

  return (
    <div>
      <h2 className="container"> STOCK</h2>
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

                <ModifyButton />

                <DeleteButton />
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default BlocStock;
