import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/js/dist/dropdown";
import "bootstrap/js/dist/collapse";
import { Link } from "react-router-dom";
import axios from "axios";

function Sidebar() {
  // const [stockData, setStockData] = useState([]);

  // const handleCategoryClick = (category) => {
  //   axios.get(`http://localhost:8080/products_category/${category}`)
  //     .then(response => {
  //       setStockData(response.data);
  //       console.log(response.data);
  //     })
  //     .catch(error => {
  //       console.error('There was an error!', error);
  //     });
  // };

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
            <div className="dropdown-item">
              <Link to={`./category/1`}>Chaises</Link>
            </div>
            <div className="dropdown-item">
              <Link to={`./category/2`}>Tables</Link>
            </div>
            <div className="dropdown-item">
              <Link to={`./category/3`}>Tables Basses</Link>
            </div>
            <div className="dropdown-item">
              <Link to={`./category/4`}>Canapés</Link>
            </div>
            <div className="dropdown-item">
              <Link to={`./category/5`}>Buffets</Link>
            </div>
            <div className="dropdown-item">
              <Link to={`./category/6`}>Commodes</Link>
            </div>
            <div className="dropdown-item">
              <Link to={`./category/7`}>Etagères</Link>
            </div>
            <div className="dropdown-item">
              <Link to={`./category/8`}>Bibliothèques</Link>
            </div>
            <div className="dropdown-item">
              <Link to={`./category/9`}>Fauteuils</Link>
            </div>
            <div className="dropdown-item">
              <Link to={`./category/10`}>Chaises de Bureau</Link>
            </div>
            <div className="dropdown-item">
              <Link to={`./category/11`}>Meubles TV</Link>
            </div>
            <div className="dropdown-item">
              <Link to={`./category/12`}>Tabourets de bar</Link>
            </div>
            <div className="dropdown-item">
              <Link to={`./category/13`}>Consoles</Link>
            </div>
            <div className="dropdown-item">
              <Link to={`./category/14`}>Coiffeuses</Link>
            </div>
            <div className="dropdown-item">
              <Link to={`./category/15`}>Armoires</Link>
            </div>
            <div className="dropdown-item">
              <Link to={`./category/16`}>Vaisseliers</Link>
            </div>
            <div className="dropdown-item">
              <Link to={`./category/17`}>Penderies</Link>
            </div>
            <div className="dropdown-item">
              <Link to={`./category/18`}>Tables de chevet</Link>
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
    </div>
  );
}

export default Sidebar;
