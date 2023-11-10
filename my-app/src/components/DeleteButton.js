import React from "react";
import axios from "axios";

function DeleteButton({ productId, onDelete }) {
  const handleDelete = async () => {
    try {
      // Envoie une requête de suppression au serveur
      await axios.delete(`http://localhost:8080/delete_product/${productId}`);

      // Appelle la fonction onDelete pour mettre à jour l'état ou effectuer d'autres actions nécessaires
      onDelete();
    } catch (error) {
      console.error("Erreur lors de la suppression du produit", error);
    }
  };

  return (
    <button type="button" className="btn btn-light" onClick={handleDelete}>
      Supprimer
    </button>
  );
}

export default DeleteButton;
