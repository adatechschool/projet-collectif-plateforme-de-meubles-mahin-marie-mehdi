// Essential Imports
const express = require('express');
const passport = require('passport');
const router = express.Router();

// Route for handling local login/authentication
router.post('/login', passport.authenticate('local'), (req, res) => {
  // Handle successful authentication
  res.send('Successfully authenticated');
});

// Route for initiating the Google OAuth authentication process
router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// Route for handling the callback from Google after OAuth authentication
router.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {
  // Handle successful authentication
  res.redirect('/dashboard');
});

// Route for the user dashboard or any other protected resource that requires authentication
router.get('/dashboard', isAuthenticated, (req, res) => {
  // Handle authenticated user
  res.send(`Welcome ${req.user.username}`);
});

// Route for logging out and destroying the session
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

// Middleware for checking if user is authenticated
function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/');
}

module.exports = router;
