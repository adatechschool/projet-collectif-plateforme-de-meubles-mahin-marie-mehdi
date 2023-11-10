const express = require("express");
const userRouter = express.Router();

// POST user into user table
userRouter.post("/inscription", (req, res) => {
  try {
    const sqlCheck = `SELECT * FROM user WHERE email = ?`;
    req.db.get(sqlCheck, [req.body.email], (err, row) => {
      if (err) {
        res.status(501).json({ message: err.message });
      } else if (row) {
        res.status(400).json({ message: "L'Email est déjà utilisé" });
        } else {
          const sqlInsert =
          `INSERT INTO user (firstName, lastName, email, password) VALUES (?, ?, ?, ?)`;
        req.db.run(sqlInsert, [req.body.firstName, req.body.lastName, req.body.email, req.body.password], (err, result) => {
          if (err) {
            res.status(502).json({ message: "Cannot create user" });
          } else {
            res.json({ message: "User created successfully" });
          }
        });
      }
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
