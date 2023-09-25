const Barang = require("../models/barang.modal");

exports.findAll = (req, res) => {
  const name = req.query.name;

  Barang.getAll(name, (err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving barang.",
      });
    else res.send(data);
  });
};

exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  // Create a Tutorial
  const barang = new Barang({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    stock: req.body.stock,
    weigh: req.body.weigh,
    condition: req.body.condition,
  });

  // Save Tutorial in the database
  Barang.create(barang, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Barang.",
      });
    else res.send(data);
  });
};
