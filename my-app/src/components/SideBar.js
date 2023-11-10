import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css'
import "bootstrap/js/dist/dropdown";
import "bootstrap/js/dist/collapse";
import { Link } from "react-router-dom";
import axios from "axios";

function Sidebar() {
  const [stockData, setStockData] = useState([]);

  const handleCategoryClick = (category) => {
    axios.get(`http://localhost:8080/products_category/${category}`)
      .then(response => {
        setStockData(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  };
  
  return (
    <div className="col-auto col-md-2 bg-dark d-flex flex-column justify-content-between min-vh-100">
      <div className="ms-4 d-flex align-items-center text-white d-none d-sm-inline">
        <span className="f5-4">Filtres</span>
        <hr className="text-white d-none d-sm-block"></hr>
        <div className="dropdown-open">
          <a
            className="btn border-none dropdown-toggle text-white"
            type="button"
            id="triggerId"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i className="bi bi-lamp"></i>
            <span className="fs-5 ms-3">Catégories</span>
          </a>
          <div className="dropdown-menu" aria-labelledby="triggerId">
            <a className="dropdown-item" onClick={() => handleCategoryClick(1)}>
              Chaises
            </a>
            <a className="dropdown-item" href="#" onClick={() => handleCategoryClick(2)}>
              Tables
            </a>
            <a className="dropdown-item" href="#">
              Tables basses
            </a>
            <a className="dropdown-item" href="#">
              Canapés
            </a>
            <a className="dropdown-item" href="#">
              Buffets
            </a>
            <a className="dropdown-item" href="#">
              Commodes
            </a>
            <a className="dropdown-item" href="#">
              Etagères
            </a>
            <a className="dropdown-item" href="#">
              Bibliothèques
            </a>
            <a className="dropdown-item" href="#">
              Fauteuils
            </a>
            <a className="dropdown-item" href="#">
              Chaises de bureaux
            </a>
            <a className="dropdown-item" href="#">
              Meubles TV
            </a>
            <a className="dropdown-item" href="#">
              Tabourets de bar
            </a>
            <a className="dropdown-item" href="#">
              Consoles
            </a>
            <a className="dropdown-item" href="#">
              Coiffeuses
            </a>
            <a className="dropdown-item" href="#">
              Armoires
            </a>
            <a className="dropdown-item" href="#">
              Vaisseliers
            </a>
            <a className="dropdown-item" href="#">
              Penderies
            </a>
            <a className="dropdown-item" href="#">
              Tables de chevet
            </a>
          </div>
        </div>
        <div className="dropdown-open">
          <a
            className="btn border-none dropdown-toggle text-white"
            type="button"
            id="triggerId"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i className="bi bi-cash-coin"></i>
            <span className="fs-5 ms-3">Prix</span>
          </a>
          <div className="dropdown-menu" aria-labelledby="triggerId">
            <a className="dropdown-item" href="#">
              0€ - 100€
            </a>
            <a className="dropdown-item" href="#">
              100€ - 200€
            </a>
          </div>
        </div>
        <div className="dropdown-open">
          <a
            className="btn border-none dropdown-toggle text-white"
            type="button"
            id="triggerId"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i className="bi bi-gem"></i>
            <span className="fs-5 ms-3">Matériaux</span>
          </a>
          <div className="dropdown-menu" aria-labelledby="triggerId">
            <a className="dropdown-item" href="#">
              Bois
            </a>
            <a className="dropdown-item" href="#">
              Métal
            </a>
          </div>
        </div>
        <div className="dropdown-open">
          <a
            className="btn border-none dropdown-toggle text-white"
            type="button"
            id="triggerId"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i className="bi bi-palette"></i>
            <span className="fs-5 ms-3">Couleurs</span>
          </a>
          <div className="dropdown-menu" aria-labelledby="triggerId">
            <a className="dropdown-item" href="#">
              Noir
            </a>
            <a className="dropdown-item" href="#">
              Blanc
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
