const express = require("express");

const router = express.Router();
const { browse, read, add } = require("../../../controllers/productActions");

router.get("/", browse);

router.get("/:name", read);

router.post("/", add);

module.exports = router;
