const Cancion = require("../models/cancion.models");

exports.get_home = (req, res, next) => {
  Cancion.fetch()
    .then(([rows, fieldData]) => {
      res.render("home", {
        canciones: rows,
        ultima: req.cookies.ultima,
        isLoggedIn: req.session.isLoggedIn || false,
        nombre: req.session.nombre || "",
        privilegios: req.session.privilegios || [],
      });
    })
    .catch((err) => console.log(err));
};

exports.get_agregar = (req, res, next) => {
  res.render("forms", {
    isLoggedIn: req.session.isLoggedIn || false,
    nombre: req.session.nombre || "",
    crsfToken: req.csrfToken(),
  });
};
exports.post_agregar = (req, res, next) => {
  res.setHeader(
    "Set-Cookie",
    `ultima=${req.body.titulo};HttpOnly;Secure;SameSite=Strict`
  );
  const cancion = new Cancion(req.body);
  cancion.save().then(() => {
    res.redirect("/canciones/home");
  });
};
exports.get_rick = (req, res, next) => {
  res.render("gifs");
};
