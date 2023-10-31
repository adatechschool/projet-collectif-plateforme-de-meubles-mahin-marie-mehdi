import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <h1>COPAMEBA</h1>
        <ul>
          <li>
            <Link to="./accueil">Accueil</Link>
          </li>
          <li>
            <Link to="./connexion">Connexion</Link>
          </li>
          <li>
            <Link to="./inscription">Inscription</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;