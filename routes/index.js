const express = require("express");

// const categoriesRouter = require("./categoriessRouter");
const productsRouter = require("./productsRouter");
const usersRouter = require("./usersRouter");

const routerApi = (app) => {
  const router = express.Router();
  app.use("/api/v1", router);
  router.use("/products", productsRouter);
  router.use("/users", usersRouter);
  // router.use("/categories", categoriesRouter);
};

module.exports = routerApi;
