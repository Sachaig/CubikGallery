const express = require("express");

const router = express.Router();
const { browse, read, add } = require("../../../controllers/productActions");

// Route pour obtenir la liste des produits
router.get("/", browse);

// Route pour obtenir un produit par nom (vous pouvez adapter pour utiliser un ID à la place)
router.get("/:name", read);

// Route pour ajouter un nouveau produit
router.post("/", add);

module.exports = router;
