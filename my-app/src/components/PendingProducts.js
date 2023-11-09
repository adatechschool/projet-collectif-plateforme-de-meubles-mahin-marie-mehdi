// Ce composant est appelé dans la page Admin.js
import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";
import ValidateButton from "../components/ValidateButton";
import DeleteButton from "../components/DeleteButton";

function PendingProducts() {
  const [stockData, setStockData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/products_status/0')
      .then(response => {
        setStockData(response.data);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
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
              <th>Matière</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {stockData.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>1</td>
                <td>{product.material}</td>

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
