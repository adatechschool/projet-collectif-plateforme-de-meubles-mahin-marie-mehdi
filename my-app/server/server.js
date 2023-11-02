const express = require('express')
const session = require('express-session')
require("dotenv").config()
const securityMiddleware = require('./Middlewares/securityMiddleware');
const app = express()
const authentification = require('./Middlewares/authentification');
const mysql = require('mysql');
const connexionDatabase = require('./Database/connectionDatabase');

// Use the security middleware for all routes
app.use(securityMiddleware);

// Middleware function for logging incoming requests
app.use((req, res, next) => {
    console.log(`Request received: ${req.method} ${req.url}`);
    next(); // Move on to the next middleware or route
  });

  // possibilité de le mettre dans un fichier à part dans le dossier middleware plus tard
  // Middleware de gestion de session
app.use(session({
    name: process.env.SESSION_NAME, // Nom du cookie de session
    resave: false, // Ne pas enregistrer la session à chaque requête non modifiée
    saveUninitialized: false, // Ne pas enregistrer de session pour les visiteurs sans données de session
    secret: process.env.SESSION_SECRET, // Clé secrète pour signer les cookies de session
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7, // Durée de vie du cookie de session (7 jours)
      secure: false, // Le cookie de session peut être transmis sur une connexion non sécurisée (HTTP)
      // Vous pouvez activer "secure" en true en production avec HTTPS
    },
  })
);

  // Middleware for authentication
  app.use(authentification);
  // Middleware for parsing JSON request bodies
  app.use(express.json());

  // Define your routes and API endpoints here

  // Error handling middleware
  app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ error: 'Ooops !' });
  });

// Start the server
app.listen(8080, () => { console.log("Server is running") });

// module.exports = app
