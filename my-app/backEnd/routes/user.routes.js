const express = require("express");
const userRouter = express.Router();

// POST user into user table
userRouter.post("/inscription", (req, res) => {
  try {
    console.log("inscription", req.body)
    const sql =
      `INSERT INTO user (firstName, lastName, email, password) VALUES ('${req.body.firstName}', '${req.body.lastName}', '${req.body.email}','${req.body.password}')`;
    req.db.run(sql, [], (err, rows) => {
      if (err) {
        console.log(err);
        res.status(500).json({ message: "Cannot create user" });
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