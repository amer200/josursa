const express = require("express");
const route = express.Router();
const adminController = require("../controllers/admin");
route.get("/home", adminController.getHome);
route.post("/home/header", adminController.postHomeHeader);
route.post("/home/about", adminController.postHomeAbout);
// projects
route.post("/home/add-project", adminController.postAddProjects);
route.post("/home/delelte-project/:id", adminController.deleteProject);
route.post("/home/edit-project/:id", adminController.editProject);
//services
route.post("/home/add-serv", adminController.addService);
route.post("/home/delelte-serv/:id", adminController.deleteServ);
route.post("/home/edit-serv/:id", adminController.editServ);
module.exports = route;
