// Import the necessary modules
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const bcrypt = require('bcryptjs');

// Configure the local authentication policy
passport.use(new LocalStrategy(
  { usernameField: 'email' }, // Use email as the username
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

// Configure the authentication policy Google OAuth
passport.use(new GoogleStrategy({
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: '/auth/google/callback'
},
(accessToken, refreshToken, profile, done) => {
  // Check if the user already exists in the database
  User.findOne({ googleId: profile.id }, (err, user) => {
    if (err) { return done(err); }
    if (user) {
      // User already exists, continue
      return done(null, user);
    } else {
      // Create a new user
      const newUser = new User({
        googleId: profile.id,
        displayName: profile.displayName,
        email: profile.emails[0].value
      });
      newUser.save((err) => {
        if (err) { return done(err); }
        return done(null, newUser);
      });
    }
  });
}
));



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