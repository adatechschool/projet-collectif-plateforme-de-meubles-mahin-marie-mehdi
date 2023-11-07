// Clem : Cette page nous permet de créer des API permettant d'accéder aux données contenues
// dans la table produit. Il y a une route qui ressort tous les produits et une qui ressort un produit
// en fonction de l'ID.

const express = require("express");
const router = express.Router();

// GET all products
router.get("/products", (req, res) => {
  try {
    const sql = "SELECT * FROM Product ORDER BY id";
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

// GET a single product by ID
router.get("/products/:id", (req, res) => {
  const id = req.params.id;
  try {
    const sql = "SELECT * FROM Product WHERE id = ?";
    req.db.get(sql, id, (err, rows) => {
      if (err) {
        res.status(404).json({ message: "Cannot find product" });
      }
      res.json(rows);
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
