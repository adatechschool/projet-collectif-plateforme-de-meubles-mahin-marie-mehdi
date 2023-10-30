// Import the necessary modules
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');

// Configure the local authentication policy
passport.use(new LocalStrategy(
  { usernameField: 'email' }, // Utiliser l'email comme nom d'utilisateur
  (email, password, done) => {
    User.findOne({ email: email }, (err, user) => {
      if (err) { return done(err); }
      if (!user) { return done(null, false, { message: 'Email incorrect.' }); }

      // Verify the password
      bcrypt.compare(password, user.password, (err, res) => {
        if (res) {
          // The password is correct
          return done(null, user);
        } else {
          // The password is incorrect
          return done(null, false, { message: 'Mot de passe incorrect.' });
        }
      });
    });
  }
));

// Define a route for authentication
app.post('/login', passport.authenticate('local'), (req, res) => {
  // The user has been authenticated
  res.redirect('/dashboard');
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