import React from "react";
import Carousel from "../components/Carousel";
import FicheDetail from "../components/FicheDetail";

const Produit = () => {
  return (
    <div className="container">
      {/* <div className="row">
        <div className="col-6 text-center mt-4">
          <h1>Nom du meuble</h1>
        </div>
        <div className="col-6 text-center mt-4">
          <h1>Description</h1>
        </div>
      </div> */}
      <div className="row">
        <div className="col-6">
          <Carousel />
        </div>
        <div className="col-6">
          <FicheDetail />
        </div>
      </div>
    </div>
  );
};

export default Produit;
