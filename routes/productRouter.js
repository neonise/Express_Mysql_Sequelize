const productController = require("../controllers/productController.js");

const router = require("express").Router();

router.get("/allProducts", productController.getAllProducts);

router.get("/:id", productController.getOneProduct);

router.post("/addProduct", productController.addProduct);

router.put("/:id", productController.updateProduct);

router.delete("/:id", productController.deleteProduct);

module.exports = router;
