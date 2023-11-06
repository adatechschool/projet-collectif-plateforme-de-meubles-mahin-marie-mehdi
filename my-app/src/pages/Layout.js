import { Outlet, Link } from "react-router-dom";
import logo from "../assets/images/COPMEBA.png";

const Layout = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <img id="logo" src={logo} alt="logo" className="thumbnail"></img>
        <h1 className="navbar-brand" Style="padding-bottom:0;">
          COPAMEBA
        </h1>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link to="./accueil" className="nav-link">
                Accueil<span className="sr-only"></span>
              </Link>
            </li>
            <li className="nav-item active">
              <Link to="./admin" className="nav-link">
                Administration<span className="sr-only"></span>
              </Link>
            </li>
            <li className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Compte
              </span>
              <div
                className="dropdown-menu float-right"
                aria-labelledby="navbarDropdownMenuLink"
                Style="right:0; left:auto;"
              >
                <Link to="./connexion" className="dropdown-item">
                  Connexion
                </Link>
                <Link to="./inscription" className="dropdown-item">
                  Inscription
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
