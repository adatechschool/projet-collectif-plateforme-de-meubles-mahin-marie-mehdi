import CardsGenerator from "../components/CardsGenerator";
// import Sidebar from "../components/SideBar";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Category() {
  // Récupérer les catégories filtrées par l'utilisateur
  // Récupérer l'ID de la catégorie dans l'URL (voir doc React routeur)
  // Transmettre à cardGenerator
  // Afficher les cartes filtrées
  const [category, setCategory] = useState([]);
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    axios
      .get(`http://localhost:8080/products_category/${id}`)
      .then((response) => {
        setCategory(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, [id]);
  console.log(category);

  // Définissez le nombre de colonnes par ligne (4 ou 5, selon votre choix)
  const columnsPerRow = 4;

  return (
    <div className="container-fluid">
      <div className="row">
        {category.map((product, index) => (
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
                <Link to={`/DetailPage/${product.id}`}>
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

export default Category;
