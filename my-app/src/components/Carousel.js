import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Carousel() {
  const { id } = useParams();
  let [result, setResult] = useState({});
  // console.log({ id });
  useEffect(() => {
    axios
      .get(`http://localhost:8080/products/${id}`)
      .then((response) => {
        setResult(response.data);
        console.log(response);
        console.log(result);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, []);

  // productImages est là pour intégrer les images des produits venant de la BDD
  return (
    <div className="d-flex flex-column justify-content-center">
      {/* Carousel */}

      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100 img-fluid"
              src={result.picture}
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100 img-fluid"
              src={result.picture}
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100 img-fluid"
              src={result.picture}
              alt="Third slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100 img-fluid"
              src={result.picture}
              alt="Fourth slide"
            />
            <div className="carousel-caption d-none d-md-block"></div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100 img-fluid"
              src={result.picture}
              alt="Fifth slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100 img-fluid"
              src={result.picture}
              alt="Sixth slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100 img-fluid"
              src={result.picture}
              alt="Seventh slide"
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

      {/* Thumbnails */}

      <div className="thumb d-flex flex-row flex-nowrap justify-content-top">
        <img src={result.picture} alt="Description" className="img-thumbnail" />
        <img src={result.picture} alt="Description" className="img-thumbnail" />
        <img src={result.picture} alt="Description" className="img-thumbnail" />
        <img src={result.picture} alt="Description" className="img-thumbnail" />
        <img src={result.picture} alt="Description" className="img-thumbnail" />
      </div>
    </div>
  );
}

export default Carousel;
