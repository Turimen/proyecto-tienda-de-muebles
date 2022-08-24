const express = require("express");
const app = express();
const routes = require("./routes/tiendaRoutes");
// const productosRoutes = require("./routes/tiendaRoutes");
const path = require("path");
const databaseConnection = require("../config/database");
const port = process.env.PORT || 4000;

//Conexion con MySQL
databaseConnection.connect();

//vamos a recibir info en formato JSON
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

//rutas
app.use("", routes);
// app.use("/productos", productosRoutes);

app.listen(port, () => {
  console.log(`Server corriendo en Puerto ${port}`);
});
