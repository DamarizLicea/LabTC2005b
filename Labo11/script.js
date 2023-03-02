//const express = require("express");
//const bodyParser = require("body-parser");

//const app = express();

//app.use(bodyParser.urlencoded({ extended: false }));

//Middleware
//app.use((request, response, next) => {
//console.log("Middleware!");

//Le permite a la petición avanzar hacia el siguiente middleware
//  next();
//});

/*app.use("/home", (request, response, next) => {
  response.send("Bienvenido a casa!");
});

const hotcakesRutas = require("./routes/hot_cakes.routes");

app.use("/hot_cakes", hotcakesRutas);

app.use((request, response, next) => {
  console.log("Otro middleware!");

  response.status(404);

  //Manda la respuesta
  response.send("Lo sentimos, ya no tenemos hot cakes");
});

app.listen(3000);
*/

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "imagenes")));
app.use("/home", (request, response, next) => {
  response.send("Bienvenido a la pantalla principal!");
});
app.use("/dos", (request, response, next) => {
  response.send("No sabía que poner aquí");
});
app.use("/tres", (request, response, next) => {
  response.send("Sigo sin ideas");
});
const pagRutas = require("./routes/pag.routes");

app.use("/pag", pagRutas);

const pimRutas = require("./routes/pim.routes");

app.use("/pim", pimRutas);

app.use((request, response, next) => {
  response.status(404);

  //Manda la respuesta
  response.send("Not found");
});

app.listen(3000);
