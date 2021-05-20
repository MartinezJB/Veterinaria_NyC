const express = require("express");

const app = express();

const port = 3000;

app.use(express.static(__dirname + "/public"));

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/servicios", (req, res) => {
    res.render("servicios")
});

app.get("/consultas", (req, res) => {
    res.render("consultas")
});

app.get("/tienda", (req, res) => {
    res.render("tienda")
});

app.listen(port, ()=>{
    console.log("escuchando...");
});