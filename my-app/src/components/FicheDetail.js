import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function FicheDetail() {
  const [stockData, setStockData] = useState([]);
  const {id} = useParams(); 
  console.log({id})
  useEffect(() => {
    axios.get("http://localhost:8080/products/:id")
      .then(response => {
        setStockData(response.data);
        console.log(response.data)
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }, []);


  return (
    
    <div className="card">
      <div className="card-body">
      
        {stockData.map((product,index) => (
          <>
        <h5 className="card-title">{product.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{product.price}</h6>
        <p className="card-text">Caractéristiques du produit :</p>
        <ul>
          <li>Catégorie</li>
          <li>{product.dimensions}</li>
          <li>Matériaux :</li>
          <li>Coloris :</li>{product.color}
          <button
            type="button"
            className="btn btn-primary"
            id="colorisBtn"
          ></button>{" "}
          <button
            type="button"
            className="btn btn-warning"
            id="colorisBtn"
          ></button>{" "}
          <button
            type="button"
            className="btn btn-success"
            id="colorisBtn"
          ></button>{" "}
          <button
            type="button"
            className="btn btn-danger"
            id="colorisBtn"
          ></button>
        </ul>
        <button className="btn btn-secondary m-2">Acheter maintenant</button>
        <button className="btn btn-secondary m-2">Ajouter au panier</button>
        </>
        ))}

      </div>
    </div>

  );
}

export default FicheDetail;
