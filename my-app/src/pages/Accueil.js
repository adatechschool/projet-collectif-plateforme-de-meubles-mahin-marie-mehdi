import CardsGenerator from "../components/CardsGenerator";
import Sidebar from "../components/SideBar";

function Accueil() {
  return (
    <div Style="display: flex;">
      <Sidebar />
      <CardsGenerator  />
    </div>
  );
}

export default Accueil;
