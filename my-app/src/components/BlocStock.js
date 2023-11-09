// Ce composant est utilisé dans la page Admin.js
import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";
import ModifyButton from "../components/ModifyButton";
import DeleteButton from "../components/DeleteButton";

function BlocStock() {
  const [stockData, setStockData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/products_status/1')
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
      <h2 className="container"> STOCK</h2>
      <div className={tableClass}>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nom du produit</th>
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

                <ModifyButton />

                <DeleteButton productId={product.id} />
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default BlocStock;
