module.exports = (app) => {
  const barang = require("../controllers/barang.cotroller");

  let router = require("express").Router();

  router.post("/", barang.create);

  router.get("/", barang.findAll);

  app.use("/api/barang", router);
};
