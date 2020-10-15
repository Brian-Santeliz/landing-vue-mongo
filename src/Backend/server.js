const express = require("express");
const morgan = require("morgan");
const path = require("path");
const app = express();

app.set("port", process.env.PUERTO || 4000);
app.use(express.json());
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "public")));

app.listen(app.get("port"), () => {
  console.log(`Servidor en el puerto: ${app.get("port")}`);
});

//conectar a la DB
