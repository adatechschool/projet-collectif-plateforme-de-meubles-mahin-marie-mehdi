import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css'
import "bootstrap/js/dist/dropdown";
import "bootstrap/js/dist/collapse";
function Sidebar() {
  return (
    <div className="col-auto col-md-2 bg-dark d-flex flex-column justify-content-between min-vh-100">
      <div className="ms-4 d-flex align-items-center text-white d-none d-sm-inline">
        <span className="f5-4">Filtres</span>
        <hr className="text-white d-none d-sm-block"></hr>
        {/* <ul className="nav nav-pills flex-column" id="parentM">
          <li className="nav-item my-1">
            <a href="#" className="nav-link text-white" aria-current="page">
              <i className="bi bi-speedometer2"></i>
              <span className="ms-2">Catégories</span>
            </a>
            <ul className="nav collapse ms-2 flex-column" id="submenu1" data-bs-parent="#parentM">
            <li className="nav-item">
              <a className="nav-link text-white" href="#" data-bs-toggle="collapse" data-bs-target="#submenu1" aria-expanded="false" aria-controls="submenu1">
                Item1test
              </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  SUbItem
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item my-1">
            <a
              href="#submenu"
              className="nav-link text-white"
              data-bs-toggle="collapse"
              aria-current="page"
            >
              <i className="bi bi-grid"></i>
              <span className="ms-2">Prix</span>
              <i className="bi bi-arrow-down-short ms-3"></i>
            </a>
            <ul
              className="nav collapse ms-2 flex-column"
              id="submenu"
              data-bs-parent="#parentM"
            >
              <li className="nav-item">
                <a className="nav-link text-white" href="#" aria-current="page">
                  Item1test
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Item2Test
                </a>
              </li>
            </ul>
          </li>
        </ul> */}
        <div className="dropdown-open">
          <a
            className="btn border-none dropdown-toggle text-white"
            type="button"
            id="triggerId"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i className="bi bi-person f5-4"></i>
            <span className="fs-5 ms-3">Catégories</span>
          </a>
          <div className="dropdown-menu" aria-labelledby="triggerId">
            <a className="dropdown-item" href="#">
              Chaises
            </a>
            <a className="dropdown-item" href="#">
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
            <i className="bi bi-person f5-4"></i>
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
            <i className="bi bi-person f5-4"></i>
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
            <i className="bi bi-person f5-4"></i>
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
