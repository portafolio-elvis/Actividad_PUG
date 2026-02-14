const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "public")));
app.use(
  "/bootstrap",
  express.static(path.join(__dirname, "node_modules/bootstrap/dist")),
);

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("index", {
    title: "Servicios",
    servicios: [
      {
        nombre: "Diseño Web",
        descripcion: "Creamos páginas web bonitas y fáciles de usar.",
      },
      {
        nombre: "Redes Sociales",
        descripcion: "Te ayudamos a gestionar tus redes sociales.",
      },
      {
        nombre: "Soporte Técnico",
        descripcion: "Ayuda con tu computadora y programas.",
      },
    ],
  });
});

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
