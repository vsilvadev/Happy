//import packages
const express = require("express");
const path = require("path");
const pages = require("./pages.js");

//initialize express
const server = express();
server
//using req body
.use(express.urlencoded({extended: true}))
//using statics files
.use(express.static("public"))

//config template engine
.set("views", path.join(__dirname, "views"))
.set("view engine", "hbs")

//app routes
.get("/", pages.index)
.get("/orphanage", pages.orphanage)
.get("/orphanages", pages.orphanages)
.get("/create-orphanage", pages.createOrphanages)
.post("/save-orphanage", pages.saveOrphanage)


//run server
server.listen(5500);