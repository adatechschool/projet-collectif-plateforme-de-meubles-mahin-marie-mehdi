// Import the necessary modules
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const bcrypt = require("bcryptjs");
const User = require("../../src/Database/connectionDatabase");
const express = require("express");

const app = express();

// Configure the local authentication policy
passport.use(
  new LocalStrategy(
    { usernameField: "email" }, // Use email as the username
    (email, password, done) => {
      User.findOne({ email: email }, (err, user) => {
        if (err) {
          return done(err);
        }
        if (!user) {
          return done(null, false, { message: "Email incorrect." });
        }

        // Verify the password
        bcrypt.compare(password, user.password, (err, res) => {
          if (res) {
            // The password is correct
            return done(null, user);
          } else {
            // The password is incorrect
            return done(null, false, { message: "Mot de passe incorrect." });
          }
        });
      });
    }
  )
);

// Configure the authentication policy Google OAuth
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      // Check if the user already exists in the database
      User.findOne({ googleId: profile.id }, (err, user) => {
        if (err) {
          return done(err);
        }
        if (user) {
          // User already exists, continue
          return done(null, user);
        } else {
          // Create a new user
          const newUser = new User({
            googleId: profile.id,
            displayName: profile.displayName,
            email: profile.emails[0].value,
          });
          newUser.save((err) => {
            if (err) {
              return done(err);
            }
            return done(null, newUser);
          });
        }
      });
    }
  )
);

// Middleware for checking if user is authenticated
function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/");
}

module.exports = isAuthenticated;
