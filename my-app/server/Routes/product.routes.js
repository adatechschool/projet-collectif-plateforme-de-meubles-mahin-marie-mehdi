const express = require("express");
const router = express.Router();

// GET all products
router.get("/product", (req, res) => {
  try {
    const sql = "SELECT * FROM Product ORDER BY name";
    req.db.all(sql, [], (err, rows) => {
      if (err) {
        res.status(404).json({ message: "Cannot find product" });
      }
      res.json(rows)
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET a single product by ID
router.get("/product/:id", (req, res) => {
    const id = req.params.id;
    try {
        const sql = "SELECT * FROM Product WHERE id = ?";
        req.db.all(sql, id, (err, rows) => {
          if (err) {
            res.status(404).json({ message: "Cannot find product" });
          }
          res.json(rows)
        });
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
});


module.exports = router;
