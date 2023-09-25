const sql = require("./db");

const Barang = function (barang) {
  this.name = barang.name;
  this.description = barang.description;
  this.price = barang.price;
  this.stock = barang.stock;
  this.weigh = barang.weigh;
  this.condition = barang.condition;
};

Barang.create = (newBarang, result) => {
  sql.query("INSERT INTO tb_barang SET ?", newBarang, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created Barang: ", { id: res.insertId, ...newBarang });
    result(null, { id: res.insertId, ...newBarang });
  });
};

Barang.getAll = (name, result) => {
  let query = "SELECT * FROM tb_barang";

  if (name) {
    query += `WHERE name LIKE '%${name}%'`;
  }

  sql.query(query, (err, res) => {
    if (err) {
      console.log("Error : ", err);
      result(null, err);
      return;
    }

    console.log("Barang ", res);
    result(null, res);
  });
};

module.exports = Barang;
