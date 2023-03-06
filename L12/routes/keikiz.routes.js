const fs = require("fs");
const express = require("express");
const path = require("path");

const router = express.Router();

const keikiz = [
  {
    nombre: "Chocolate Húmedo",
    //usar imagen estatica de la carpeta public llamada humedo.jpg
    imagen:
      "https://ohsweetbasil.com/wp-content/uploads/chocolate-cake-with-chocolate-frosting-recipe-13-1024x1536.jpg",
    descripcion: "Receta muy rendidora tipo pinguinos",
    handle: "@humedo",
    ingredientes: "harina, huevos, mayonesa, cocoa, bicarbonato, azúcar",
    precio: "50 p porción",
  },
  {
    nombre: "Gansito",
    imagen:
      "https://cdn.shopify.com/s/files/1/0567/7849/0010/products/WhatsAppImage2022-03-22at10.11.42AM_720x.jpg?v=1647966335",
    descripcion: "Añadir mermelada de fresa y crema chantilly",
    handle: "@gansito",
    ingredientes:
      "harina, huevos, mantequilla, cocoa, polvo para hornear, azúcar, chocolate semiamargo",
    precio: "60 p porción",
  },
  {
    nombre: "Vainilla",
    imagen:
      "https://www.allrecipes.com/thmb/B4ncMNu-G9XgfqtyIKYiT6TcWd0=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/277000-easy-vanilla-cake-ddmfs-3X4-0103-09ae059661e5407599625222c5ac7d3b.jpg",
    descripcion: "Bizcocho tipo esponja muy versátil",
    handle: "@vainilla",
    ingredientes:
      "harina, huevos, mantequilla, aceite, polvo para hornear, azúcar, extracto de vainilla",
    precio: "50 p porción",
  },
  {
    nombre: "Limón",
    imagen:
      "https://livforcake.com/wp-content/uploads/2021/06/lemon-cake-thumb-2021-1.jpg",
    descripcion: "Añadir lemon curd y merengue",
    handle: "@limon",
    ingredientes:
      "harina, huevos, mantequilla, aceite, polvo para hornear, azúcar, extracto de vainilla, jugo de dos limones, rayadura de limón",
    precio: "60 p porción",
  },
  {
    nombre: "Red Velvet",
    imagen:
      "https://thescranline.com/wp-content/uploads/2021/03/Red-Velvet-Cake.jpg",
    descripcion: "Usar buttercream de queso crema",
    handle: "@red_velvet",
    ingredientes:
      "harina, huevos, mantequilla, aceite, polvo para hornear, azúcar, extracto de vainilla, colorante rojo, cocoa",
    precio: "60 p porción",
  },
  {
    nombre: "Zanahoria",
    imagen:
      "https://www.janespatisserie.com/wp-content/uploads/2015/08/CarrotCake1-768x1152.jpg",
    descripcion:
      "Usar buttercream de queso crema y decorar con formas de zanahoria",
    handle: "@zanahoria",
    ingredientes:
      "harina, huevos, mantequilla, aceite, polvo para hornear, azúcar, extracto de vainilla, canela, zanahoria rallada, piña picada",
    precio: "60 p porción",
  },
  {
    nombre: "Chocomenta",
    imagen:
      "https://livforcake.com/wp-content/uploads/2017/05/mint-chocolate-chip-cake-2.jpg",
    descripcion: "Usar buttercream con menta y uno de chocolate",
    handle: "@chocomenta",
    ingredientes:
      "harina, huevos, mantequilla, cocoa, polvo para hornear, azúcar, chocolate semiamargo",
    precio: "60 p porción",
  },
  {
    nombre: "Chai",
    imagen:
      "https://www.thelittleepicurean.com/wp-content/uploads/2019/03/chai-layer-cake-1-1.jpg",
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
