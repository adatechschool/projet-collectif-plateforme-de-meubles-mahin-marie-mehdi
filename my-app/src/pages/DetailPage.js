import React from "react";
import Carousel from "../components/Carousel";
import FicheDetail from "../components/FicheDetail";

const Produit = () => {
  return (
    <div class="container">
      <div class="row">
        <div class="col-6 text-center mt-4">
          <h1>Nom du meuble</h1>
        </div>
        <div class="col-6 text-center mt-4">
          <h1>Description</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-6 text-center">
          <Carousel />
        </div>
        <div class="col-6">
          <FicheDetail />
        </div>
      </div>
    </div>
  );
};

export default Produit;
