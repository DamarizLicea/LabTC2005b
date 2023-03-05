const fs = require("fs");
const express = require("express");
const path = require("path");

const router = express.Router();

const keikiz = [
  {
    nombre: "Chocolate Húmedo",
    //usar imagen estatica de la carpeta public llamada humedo.jpg
    imagen: "/humedo.jpg",
    descripcion: "Receta muy rendidora tipo pinguinos",
    handle: "@humedo",
    ingredientes: "harina, huevos, mayonesa, cocoa, bicarbonato, azúcar",
    precio: "50 p porción",
  },
  {
    nombre: "Gansito",
    imagen: "/gansito.jpg",
    descripcion: "Añadir mermelada de fresa y crema chantilly",
    handle: "@gansito",
    ingredientes:
      "harina, huevos, mantequilla, cocoa, polvo para hornear, azúcar, chocolate semiamargo",
    precio: "60 p porción",
  },
  {
    nombre: "Vainilla",
    imagen: "/vainilla.jpg",
    descripcion: "Bizcocho tipo esponja muy versátil",
    handle: "@vainilla",
    ingredientes:
      "harina, huevos, mantequilla, aceite, polvo para hornear, azúcar, extracto de vainilla",
    precio: "50 p porción",
  },
  {
    nombre: "Limón",
    imagen: "/limon.jpg",
    descripcion: "Añadir lemon curd y merengue",
    handle: "@limon",
    ingredientes:
      "harina, huevos, mantequilla, aceite, polvo para hornear, azúcar, extracto de vainilla, jugo de dos limones, rayadura de limón",
    precio: "60 p porción",
  },
  {
    nombre: "Red Velvet",
    imagen: "galery/redvelvet.jpg",
    descripcion: "Usar buttercream de queso crema",
    handle: "@red_velvet",
    ingredientes:
      "harina, huevos, mantequilla, aceite, polvo para hornear, azúcar, extracto de vainilla, colorante rojo, cocoa",
    precio: "60 p porción",
  },
  {
    nombre: "Zanahoria",
    imagen: "galery/zanahoria.jpg",
    descripcion:
      "Usar buttercream de queso crema y decorar con formas de zanahoria",
    handle: "@zanahoria",
    ingredientes:
      "harina, huevos, mantequilla, aceite, polvo para hornear, azúcar, extracto de vainilla, canela, zanahoria rallada, piña picada",
    precio: "60 p porción",
  },
  {
    nombre: "Chocomenta",
    imagen: "galery/chocomenta.jpg",
    descripcion: "Usar buttercream con menta y uno de chocolate",
    handle: "@chocomenta",
    ingredientes:
      "harina, huevos, mantequilla, cocoa, polvo para hornear, azúcar, chocolate semiamargo",
    precio: "60 p porción",
  },
  {
    nombre: "Chai",
    imagen: "galery/random.jpg",
    descripcion: "Usar buttercream de queso crema",
    handle: "@chai",
    ingredientes:
      "harina, huevos, mantequilla, aceite, polvo para hornear, azúcar, extracto de vainilla, canela, jengibre, clavo, cardamomo, nuez moscada",
    precio: "70 p porción",
  },
];

router.get("/lista", (request, response, next) => {
  response.render("lista", { keikiz: keikiz });
});

router.get("/registro", (request, response, next) => {
  let html = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8">
        </head>
        <body>
            <h1>Laboratorio 12</h1>
            <form action="/keikiz/registro" method="POST">
            <fieldset>
            <ul>
              <li>
                <label for="name">Nombre:</label>
                <input type="text" id="name" name="user_name" />
              </li>
              <li>
                <label for="mail">Email:</label>
                <input type="email" id="mail" name="user_email" />
              </li>
              <li>
                <label for="msg">Mensaje:</label>
                <textarea id="msg" name="user_message"></textarea>
              </li>
            </ul>
            </fieldset>
            <br>
            <input type="submit" value="Registrarme">
            </form>
        </body>
    </html>
`;

  response.send(html);
});

router.post("/registro", (request, response, next) => {
  console.log(request.body);
  let resp =
    "Tu nombre es " +
    request.body.user_name +
    " y tu correo es " +
    request.body.user_email +
    " y tu mensaje es " +
    request.body.user_message +
    "";
  fs.writeFileSync("registro.txt", resp);
  response.send(
    "Tu nombre es " +
      request.body.user_name +
      " y tu correo es " +
      request.body.user_email +
      " y tu mensaje es " +
      request.body.user_message +
      ""
  );
});

module.exports = router;
