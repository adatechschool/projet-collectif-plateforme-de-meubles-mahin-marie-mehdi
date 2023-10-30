const express = require('express')
const securityMiddleware = require('./securityMiddleware');

const app = express()
const authentification = require('./Middlewares/authentification');

// Use the security middleware for all routes
app.use(securityMiddleware);

// Middleware function for logging incoming requests
app.use((req, res, next) => {
    console.log(`Request received: ${req.method} ${req.url}`);
    next(); // Move on to the next middleware or route
  });

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
app.listen(8080, () => { console.log("Server is running") })