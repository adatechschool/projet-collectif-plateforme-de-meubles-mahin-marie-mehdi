const express = require('express')
const session = require('express-session')
require("dotenv").config()
const securityMiddleware = require('./Middlewares/securityMiddleware');
const app = express()
const authentification = require('./Middlewares/authentification');

// Use the security middleware for all routes
app.use(securityMiddleware);

// Middleware function for logging incoming requests
app.use((req, res, next) => {
    console.log(`Request received: ${req.method} ${req.url}`);
    next(); // Move on to the next middleware or route
  });

  /// Possibility to move this to a separate file in the middleware folder later
  // Session management middleware
app.use(session({
  name: process.env.SESSION_NAME, // Session cookie name
  resave: false, // Do not save the session on every unmodified request
  saveUninitialized: false, // Do not save a session for visitors without session data
  secret: process.env.SESSION_SECRET, // Secret key for signing session cookies
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7, // Session cookie lifetime (7 days)
    secure: false, // The session cookie can be transmitted over an insecure connection (HTTP)
    // You can enable "secure" as true in production with HTTPS
  },
}));


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
