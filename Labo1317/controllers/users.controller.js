const User = require("../models/user.model");
const bcrypt = require("bcryptjs");

exports.get_login = (request, response, next) => {
  let mensaje = "";
  if (request.session.mensaje != "") {
    mensaje = request.session.mensaje;
    request.session.mensaje = "";
  }
  response.render("login", {
    mensaje: mensaje,
    isLoggedIn: request.session.isLoggedIn || false,
    nombre: request.session.nombre || "",
    csrfToken: request.csrfToken(),
  });
};

exports.post_login = (request, response, next) => {
  User.fetchOne(request.body.username)
    .then(([rows, fieldData]) => {
      if (rows.length > 0) {
        bcrypt
          .compare(request.body.password, rows[0].password)
          .then((doMatch) => {
            if (doMatch) {
              request.session.isLoggedIn = true;
              request.session.nombre = rows[0].nombre;
              User.getPrivilegios(rows[0].username).then(
                (([consulta_privilegios, fieldData]) => {
                  console.log(consulta_privilegios);
                  const privilegios = [];
                  for (let privilegio of consulta_privilegios) {
                    privilegios.push(privilegio.nombre);
                  }
                  console.log(privilegios);
                  request.session.privilegios = privilegios;
                  return request.session.save((err) => {
                    response.redirect("/pag/home");
                  });
                }).catch((err) => console.log(err))
              );
            } else {
              request.session.mensaje = "Contraseña incorrecta";
              response.redirect("/users/login");
            }
          })
          .catch((err) => console.log(err));
      } else {
        request.session.mensaje = "Usuario no encontrado";
        response.redirect("/users/login");
      }
    })
    .catch((err) => console.log(err));
};
exports.get_signup = (request, response, next) => {
  response.render("signup", {
    isLoggedIn: request.session.isLoggedIn || false,
    nombre: request.session.nombre || "",
    csrfToken: request.csrfToken(),
  });
};
exports.post_signup = (request, response, next) => {
  const nuevo_usuario = new User({
    nombre: request.body.nombre,
    username: request.body.username,
    password: request.body.password,
  });

  nuevo_usuario
    .save()
    .then(([rows, fieldData]) => {
      request.session.mensaje = "Usuario creado con éxito";
      response.redirect("/users/login");
    })
    .catch((err) => console.log(err));
};

exports.logout = (request, response, next) => {
  request.session.destroy(() => {
    response.redirect("/pag/home"); //Este código se ejecuta cuando la sesión se elimina.
  });
};
