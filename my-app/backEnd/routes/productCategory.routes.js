const express = require("express");
const catRouter = express.Router();

// GET all products
catRouter.get("/products_category", (req, res) => {
  try {
    const sql = "SELECT * FROM product_category ORDER BY id";
    req.db.all(sql, [], (err, rows) => {
      if (err) {
        res.status(404).json({ message: "Cannot find product" });
      }
      res.json(rows);
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = catRouter;
