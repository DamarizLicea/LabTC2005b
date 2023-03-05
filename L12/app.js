const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.urlencoded({ extended: false }));

//Middleware
app.use((request, response, next) => {
  console.log("Middleware!");

  //Le permite a la petición avanzar hacia el siguiente middleware
  next();
});

app.use("/home", (request, response, next) => {
  response.send("Bienvenido a casa!");
});

const keikizRutas = require("./routes/keikiz.routes");

app.use("/keikiz", keikizRutas);

app.use((request, response, next) => {
  console.log("Otro middleware!");

  response.status(404);

  //Manda la respuesta
  response.send("Lo sentimos, la página no existe!");
});

app.listen(3000);
