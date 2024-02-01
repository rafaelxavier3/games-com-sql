const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "rafael4488",
  database: "crudgames",
});

app.use(cors());
app.use(express.json());

// VER SE O BANCO DE DADOS ESTA FUNCIONANDO

// app.get("/", (req, res) => {
//   let SQL =
//     "INSERT INTO games (nome, preço, categoria) VALUES ('Palworld', 'R$89,00', 'Mundo Aberto')";

//   db.query(SQL, (err, results) => {
//     console.log(err);
//   });
// });

app.post("/register", (req, res) => {
  const { name } = req.body;
  const { price } = req.body;
  const { category } = req.body;

  let SQL = "INSERT INTO games (name, price, category) VALUES (?, ?, ?)";

  db.query(SQL, [name, price, category], (err, result) => {
    console.log(err);
  });
});

app.listen(5001, () => {
  console.log("rodando servidor");
});
