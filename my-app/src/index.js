// React fonctionne par import de librairie ou de composants extérieurs au fichier
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/index.css";
import reportWebVitals from "./reportWebVitals";
import Layout from "./pages/Layout";
import Accueil from "./pages/Accueil";
import Connexion from "./pages/Connexion";
import Inscription from "./pages/Inscription";
import DetailPage from "./pages/DetailPage";
import Admin from "./pages/Admin";

export default function App() {
  return (
    // Le Router permet de gérer les routes de l'application (les pages) et de les afficher
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Explications: path = ce qui s'ajoute dans l'url; element = quelle
          page va être renvoyée pour cet url */}
          <Route path="accueil" element={<Accueil />} />
          <Route path="connexion" element={<Connexion />} />
          <Route path="inscription" element={<Inscription />} />
          <Route path="detailpage" element={<DetailPage />} />
          <Route path="admin" element={<Admin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
// Lorsque vous créez un composant, vous devez l'exporter dans son propre fichier en écrivant "export default NOMFONCTION;"
// pour pouvoir l'utiliser ailleurs, mais également l'importer comme ceci: "import NOMCOMPOSANT from 'PATH/NOMFICHIER'"
// Puis pour l'afficher, vous devez l'appeler dans votre fonction (toujours en return) de cette manière : <Accueil />
// Prend donc la forme d'une balise html.

// Cette partie permet d'envoyer le composant App dans la div root du fichier public/index.html (cela permet de l'afficher)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// Généré par défaut par React (on n'y a pas touché) -----------------------------------------------
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
