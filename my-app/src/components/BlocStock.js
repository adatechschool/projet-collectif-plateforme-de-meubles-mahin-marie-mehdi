// Ce composant est utilisé dans la page Admin.js
import React from "react";
import { Table } from "react-bootstrap";
// import axios from "axios";
import ModifyButton from "../components/ModifyButton";
import DeleteButton from "../components/DeleteButton";

function BlocStock({stockData, updateData}) {
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
