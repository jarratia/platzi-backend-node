const express = require("express");
const app = express();
const port = 3000;

const { faker } = require("@faker-js/faker");

//Rutas
app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/products", (req, res) => {
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

app.get("/users", (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset,
    });
  } else {
    res.send("No hay parámetros");
  }
});

app.get("/products/filter", (req, res) => {
  res.send("Fitler");
});

app.get("/products/:id", (req, res) => {
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

app.get("/categories/:categoryId/products/:productId", (req, res) => {
  const { categoryId, productId } = req.params;

  res.json([
    {
      categoryId,
      productId,
    },
  ]);
});

//listen
app.listen(port, () => {
  console.log("Servidor corriendo en el puerto: " + port);
});
