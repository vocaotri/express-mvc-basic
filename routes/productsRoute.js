const express = require("express");
const router = express.Router();

//Controllers
const productController = require("controller/product");

/**
 * Doing some thing
 */
//Routes
router.post("/product", productController.getProductById);
module.exports = router;
