const express = require("express");

const router = express.Router();

const { faker } = require("@faker-js/faker");

//Rutas
router.get("/", (req, res) => {
  const { size } = req.query;
  const limit = size || 10;

  const products = [];

  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.url(),
    });
  }
  res.json(products);
});

router.get("/products/filter", (req, res) => {
  res.send("Fitler");
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  res.json([
    {
      id,
      name: "Producto 1",
      price: 100000,
      stock: 200,
    },
  ]);
});

//POST
router.post("/", (req, res) => {
  const body = req.body;
  res.json({
    message: "creación",
    data: body,
  });
});
module.exports = router;
