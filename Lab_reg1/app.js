const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const session = require("express-session");
const csrf = require("csurf");
const isAuth = require("./util/is-auth");
const multer = require("multer");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(
  session({
    secret: "dijo lalito que aquí iba un string largo aleatorio",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "publuic/images");
  },
  filename: (req, file, cb) => {
    cb(null, new Date().toISOString() + "-" + file.originalname);
  },
});

app.use(multer({ storage: fileStorage }).single("imagen"));

const csrfProtection = csrf();
app.use(csrfProtection);

//Middleware
app.use((request, response, next) => {
  console.log("Middleware!");

  //Le permite a la petición avanzar hacia el siguiente middleware
  next();
});

app.use("/home", (request, response, next) => {
  response.send("<h1> Hola cara de bola </h1>");
});

const rutasUsers = require("./routes/users.routes");

app.use("/users", rutasUsers);

const recetasRoutes = require("./routes/recetas.routes");
app.use("/recetas", isAuth, recetasRoutes);

app.use((request, response, next) => {
  response.status(404);
  response.send("<h1> 404 - Not Found </h1>");
});

app.listen(3000);
