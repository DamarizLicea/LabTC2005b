const fs = require("fs");
const express = require("express");

const router = express.Router();

router.get("/richi", (request, response, next) => {
  let html = `
        <!DOCTYPE html>
        <html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                <h1>Laboratorio 11</h1>
                <form action="/pag/richi" method="POST">
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

router.post("/richi", (request, response, next) => {
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
