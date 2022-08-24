const databaseConnection = require("../../config/database"); //acá podrías requerir el archivo JSON si no usas MYSQL

const renderHome = (req, res) => {
  databaseConnection.query("SELECT * FROM categorias", (error, data) => {
    if (error) {
      console.log(error);
    } else {
      res.render("pages/index", {
        data,
      });
    }
  });
};

module.exports = renderHome;

const renderProductos = (req, res) => {
  databaseConnection.query("SELECT * FROM productos", (error, data) => {
    //   databaseConnection.query("SELECT * FROM productos", (error, data) => {
    if (error) {
      console.log(error);
    } else {
      res.render("pages/productos", {
        data,
      });
    }
  });
};

const getForm = (req, res) => {
  res.render("pages/formulario");
};

const addnewProduct = (req, res) => {
  const { producto, categoria, descripcion, precio } = req.body;

  databaseConnection.query(
    'INSERT INTO productos (producto, categoria, imagen, descripcion, precio) VALUES (?,?,"/imagenes/estilo-madera.png",?,?)',
    [producto, categoria, descripcion, parseInt(precio)],
    (error, data) => {
      if (error) {
        console.log(error);
      } else {
        // res.send("recibido!");
        console.log(req);
        res.redirect("/productos");
      }
    }
  );
};

// module.exports = renderProductos;
module.exports = { renderHome, renderProductos, getForm, addnewProduct };
