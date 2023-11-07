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

module.exports = userRouter;
