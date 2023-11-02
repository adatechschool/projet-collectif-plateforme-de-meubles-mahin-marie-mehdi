import React from 'react';
import img1 from '../assets/img/table_jdr_1.jpg';
import img2 from '../assets/img/table_jdr_2.jpg';
import img3 from '../assets/img/table_jdr_3.jpg';
import img4 from '../assets/img/table_jdr_4.jpg';
import img5 from '../assets/img/table_jdr_5.jpg';
import img6 from '../assets/img/table_jdr_6.jpg';
import img7 from '../assets/img/table_jdr_7.jpg';

function Carousel() {
    <div class="d-flex flex-column justify-content-center">
        <div id="carouselExampleIndicators" className="carousel slide row" data-ride="carousel">
            <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="3" ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="4" ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="5" ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="6" ></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100 img-fluid" src={img1} alt="First slide" />
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Première image</h5>
                        <p>C'est oune potite table</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100 img-fluid" src={img2} alt="Second slide" />
                </div>
            <div className="carousel-item">
                <img className="d-block w-100 img-fluid" src={img3} alt="Third slide" />
            </div>
            <div className="carousel-item">
                <img className="d-block w-100 img-fluid" src={img4} alt="Fourth slide" />
                <div class="carousel-caption d-none d-md-block">
                <p>Et là c'est des poutits dés</p>
                </div>
            </div>
            <div className="carousel-item">
                <img className="d-block w-100 img-fluid" src={img5} alt="Fifth slide" />
            </div>
            <div className="carousel-item">
                <img className="d-block w-100 img-fluid" src={img6} alt="Sixth slide" />
            </div>
            <div className="carousel-item">
                <img className="d-block w-100 img-fluid" src={img7} alt="Seventh slide" />
            </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
            </a>
        </div> 
        <div className="thumb row">
            <img src={img1} alt="Description" className="img-thumbnail" />
            <img src={img2} alt="Description" className="img-thumbnail" />
            <img src={img3} alt="Description" className="img-thumbnail" />
            <img src={img4} alt="Description" className="img-thumbnail" />
            <img src={img5} alt="Description" className="img-thumbnail" />
            <img src={img6} alt="Description" className="img-thumbnail" />
        </div>
    </div>
};

export default Carousel;