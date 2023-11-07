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
        res.status(404).json({ message: "Cannot find products" });
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
        res
          .status(404)
          .json({ message: "Cannot find product that matches this id" });
      }
      res.json(rows);
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET all products that match a category_id
router.get("/products_category/:id", (req, res) => {
  const id = req.params.id;
  try {
    const sql = "SELECT * FROM Product WHERE category_id = ?";
    req.db.get(sql, id, (err, rows) => {
      if (err) {
        res
          .status(404)
          .json({ message: "Cannot find product that matches this category" });
      }
      res.json(rows);
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET a single product that matches status = 0 (= waiting for validation)
router.get("/products_status/0", (req, res) => {
  const id = req.params.id;
  try {
    const sql = "SELECT * FROM Product WHERE status = 0";
    req.db.get(sql, id, (err, rows) => {
      if (err) {
        res
          .status(404)
          .json({ message: "Cannot find product that matches status 0" });
      }
      res.json(rows);
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET a single product that matches status = 1 (= validated)
router.get("/products_status/1", (req, res) => {
  const id = req.params.id;
  try {
    const sql = "SELECT * FROM Product WHERE status = 1";
    req.db.get(sql, id, (err, rows) => {
      if (err) {
        res
          .status(404)
          .json({ message: "Cannot find product that matches status 1" });
      }
      res.json(rows);
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// UPDATE a product status to 1 (= validated)
router.post("/update_status/", (req, res) => {
  const id = req.params.id;
  try {
    const sql = "UPDATE product SET status = 1 WHERE id = ?";
    req.db.get(sql, id, (err, rows) => {
      if (err) {
        res.status(404).json({ message: "Cannot update status" });
      }
      res.json(rows);
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// UPDATE a product status to 1 (= validated)
router.delete("/delete_product/", (req, res) => {
  const id = req.params.id;
  try {
    const sql = "DELETE FROM product WHERE id = ?";
    req.db.get(sql, id, (err, rows) => {
      if (err) {
        res.status(404).json({ message: "Cannot delete product" });
      }
      res.json(rows);
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
