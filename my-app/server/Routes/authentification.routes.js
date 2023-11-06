// Essential Imports
const express = require('express');
const passport = require('passport');
const router = express.Router();
const app = express();
// Define a route for authentication
app.post('/login', passport.authenticate('local'), (req, res) => {
  // The user has been authenticated
  res.redirect('/dashboard');
});

// Define a route for authentication Google OAuth
app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// Define a route for redirection after authentication Google OAuth
app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), (req, res) => {
// L'utilisateur est authentifié, rediriger vers la page d'accueil
res.redirect('/');
});

// Add a middleware for checking if the user is authenticated
function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    // The user is authenticated, continue
    return next();
  } else {
    // The user is not authenticated, redirect to the login page
    res.redirect('/login');
  }
}

// Use middleware to protect routes requiring authentication
app.get('/dashboard', isAuthenticated, (req, res) => {
  // Display the dashboard of user
});

module.exports = router;
