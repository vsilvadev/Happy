//import packages
const express = require("express");
const path = require("path");
const pages = require("./pages.js");

//initialize express
const server = express();
server
.use(express.static("public"))

//config template engine
.set("views", path.join(__dirname, "views"))
.set("view engine", "hbs")

//app routes
.get("/", pages.index)
.get("/orphanage", pages.orphanage)
.get("/orphanages", pages.orphanages)
.get("/create-orphanage", pages.createOrphanages)


//run server
server.listen(5500);