const express = require("express");
const bodyParser = require("body-parser");

const app = express();
var dbConn = require("./db");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/reporte1", (req, res) => {
  dbConn.query("SELECT * FROM reporte_de_canciones_mas_escuchados", function (
    err,
    rows
  ) {
    if (err) {
      res.send(err);
    } else {
      res.send(rows);
    }
  });
});
app.get("/reporte2", (req, res) => {
  dbConn.query("SELECT * FROM reporte_de_ingresos_de_usuarios", function (
    err,
    rows
  ) {
    if (err) {
      res.send(err);
    } else {
      res.send(rows);
    }
  });
});
app.get("/reporte3", (req, res) => {
  dbConn.query("SELECT * FROM reporte_creada_por_el_estudiante", function (
    err,
    rows
  ) {
    if (err) {
      res.send(err);
    } else {
      res.send(rows);
    }
  });
});

app.use((req, res) => {
  res.status(404).send({
    success: false,
    data: {
      message: "Estás intentando hacer algo que no deberías",
    },
  });
});

app.listen(4000, () => {
  console.log("Servidor ejecutándose...");
});
