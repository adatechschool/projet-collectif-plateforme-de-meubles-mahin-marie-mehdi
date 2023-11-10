// Ce composant est appelé dans la page Admin.js
import React from "react";
import { Table } from "react-bootstrap";
import ValidateButton from "../components/ValidateButton";
import DeleteButton from "../components/DeleteButton";

function PendingProducts({ pendingData, updateData }) {
  const tableClass = pendingData.length > 0 ? "container scrollable-table" : "";

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
            {pendingData.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>1</td>
                <td>{product.material}</td>

                <ValidateButton
                  productId={product.id}
                  onValidate={updateData}
                />

                <DeleteButton productId={product.id} onDelete={updateData} />
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default PendingProducts;
