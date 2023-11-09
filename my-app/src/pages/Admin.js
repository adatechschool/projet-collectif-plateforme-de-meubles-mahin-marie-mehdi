import BlocStock from "../components/BlocStock";
import PendingProducts from "../components/PendingProducts";
import axios from "axios";
import React, {useState} from "react";

//TODO : Cette page ne devra être accessible que pour les comptes ayant des droits spécifiques.

function Admin() {
  const [stockData, setStockData] = useState([]);

  const updateStockData = () => {
    console.log("Mise à jour des données dans Admin");
    // Mettre à jour les données après la suppression d'un produit
    // Tu peux, par exemple, refaire la requête pour obtenir les données mises à jour
    axios.get('http://localhost:8080/products_status/1')
      .then(response => {
        console.log("Réponse de la mise à jour :", response.data);
        setStockData(response.data);
      })
      .catch(error => {
        console.error('Erreur lors de la mise à jour des données après suppression', error);
      });
  };

  return (
    <div>
      <BlocStock stockData={stockData}/>

      <p className="row"></p> 
      <PendingProducts updateData={updateStockData}/>
    </div>
  );
}

export default Admin;
