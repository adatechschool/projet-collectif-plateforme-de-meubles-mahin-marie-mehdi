import axios from "axios";

// Ce composant est utilisé dans le composant PendingProducts.js
function ValidateButton({ productId, onValidate }) {

    const handleValidate = async () => {
      try {
        // Envoie une requête de validation au serveur
        await axios.put(`http://localhost:8080/update_status/${productId}`);
  
        // Appelle la fonction onValidate pour mettre à jour l'état ou effectuer d'autres actions nécessaires
        onValidate();
      } catch (error) {
        console.error("Erreur lors de la validation du produit", error);
      }
    };

    return (
      //TODO : Le bouton devra permettre d'ajouter le produit en attente dans le stock effectif.
      <button type="button" class="btn btn-light" onClick={handleValidate}>
        Valider
      </button>
    );
  }
  
  export default ValidateButton