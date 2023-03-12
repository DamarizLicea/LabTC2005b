const express = require("express");
const bp = require("body-parser");
const cookieParser = require("cookie-parser");
const app = express();
const port = 3000;

app.use(bp.urlencoded({ extended: false }));
app.use(cookieParser());

app.set("view engine", "ejs");
app.set("views", "views");
app.get("/", (req, res) => {
  res.render("index");
});

const rout = require("./routes/pag.routes");
app.use("/canciones", rout);

app.listen(port);
