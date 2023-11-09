// Ce composant est utilisé dans la page Admin.js
import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import axios from "axios";
import ModifyButton from "../components/ModifyButton";
import DeleteButton from "../components/DeleteButton";

function BlocStock() {
  const [stockData, setStockData] = useState([]);

  const updateData = () => {
    // Mettre à jour les données après la suppression d'un produit
    // Tu peux, par exemple, refaire la requête pour obtenir les données mises à jour
    axios.get('http://localhost:8080/products_status/1')
      .then(response => {
        setStockData(response.data);
      })
      .catch(error => {
        console.error('Erreur lors de la mise à jour des données après suppression', error);
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/products_status/1")
      .then((response) => {
        setStockData(response.data);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, []);

  console.log(stockData);
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
            {stockData.map((product, index) => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>1</td>
                  <td>{product.material}</td>

                  <ModifyButton />

                <DeleteButton productId={product.id} onDelete={updateData}/>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default BlocStock;
