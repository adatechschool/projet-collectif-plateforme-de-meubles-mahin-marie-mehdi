import React from 'react';

function ficheDetail() {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Nom du produit</h5>
                <h6 className="card-subtitle mb-2 text-muted">350€</h6>
                <p className="card-text">Caractéristiques du produit :</p>
                <ul>
                    <li>Catégorie</li>
                    <li>Dimensions</li>
                    <li>Matériaux :</li>
                    <li>Coloris :</li> <button type="button" class="btn btn-primary colorisBtn"></button> <button type="button" class="btn btn-warning colorisBtn"></button> <button type="button" class="btn btn-success colorisBtn"></button> <button type="button" class="btn btn-danger colorisBtn"></button>
                </ul>
                <button className="card-link">Acheter maintenant</button>
                <button className="card-link">Ajouter au panier</button>
            </div>
        </div>
    )
}

export default ficheDetail