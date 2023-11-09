const express = require("express");
const userRouter = express.Router();

// POST user into user table
userRouter.post("/inscription", (req, res) => {
  try {
    const sql =
      "INSERT INTO user (id, firstName, lastName, email, password, isAdmin) VALUES (?,?,?,?,?,?)";
    req.db.all(sql, [], (err, rows) => {
      if (err) {
        res.status(404).json({ message: "Cannot create user" });
      }
      res.json(rows);
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


//
userRouter.get("/user/:email", (req, res) => {
  const email = req.params.email;
  try {
    const sql = "SELECT * FROM User WHERE email = ?";
    req.db.get(sql, email, (err, rows) => {
      if (err) {
        res
          .status(404)
          .json({ message: "You don't have an account" });
      }
      res.json(rows);
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = userRouter;


// Ajouter le parcours connexion
// Vérifier si je peux ou non m'inscrirre 2 fois avec la même adresse mail.
