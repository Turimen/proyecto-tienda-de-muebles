const express = require("express");
const {
  renderHome,
  renderProductos,
  getForm,
  addnewProduct,
} = require("../controllers/tiendacontrollers");
// const renderProductos = require("../controllers/tiendacontrollers");

const routes = express.Router(); //solicitacion a express el uso de la f router
// const productosRoutes = express.Router();

routes.get("/", renderHome);
routes.get("/productos", renderProductos);
routes.get("/nuevoProducto", getForm);
routes.post("/nuevoProducto", addnewProduct);

module.exports = routes;
// module.exports = productosRoutes;
