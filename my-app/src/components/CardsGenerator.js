import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function CardsGenerator() {
  const [stockData, setStockData] = useState([]);

  /* Replaced teh mock data with an appel to the API endpoint for products using axios */
  useEffect(() => {

    axios.get('http://localhost:8080/products')
      .then(response => {
        console.log(response.data);
        const filteredData = response.data.filter(product => product.status === 1);
        setStockData(filteredData);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, []);
  console.log(stockData);
  // Définissez le nombre de colonnes par ligne (4 ou 5, selon votre choix)
  const columnsPerRow = 4;

  return (
    <div className="container-fluid">
      <div className="row">
        {stockData.map((product, index) => (
          <div key={index} className={`col-md-${12 / columnsPerRow}`}>
            <div className="card" style={{ width: "100%", margin: "0.5rem" }}>
              <div>
                <img
                  className="card-img-top"
                  src={product.picture}
                  alt="Carte des meubles"
                />
              </div>
              <div className="card-body">
                <Link to="/DetailPage">
                  <h5 className="card-title">{product.name}</h5>
                </Link>

                <p className="card-text">{product.description}</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">{product.dimensions}</li>
                <li className="list-group-item">{product.material}</li>
                <li className="list-group-item">{product.color}</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardsGenerator;
