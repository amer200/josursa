const express = require("express");
const route = express.Router();
const adminController = require("../controllers/admin");
route.get("/home", adminController.getHome);
//header
route.post("/home/header", adminController.postHomeHeader);
//about
route.post("/home/about", adminController.postHomeAbout);
// projects
route.post("/home/add-project", adminController.postAddProjects);
route.post("/home/delelte-project/:id", adminController.deleteProject);
route.post("/home/edit-project/:id", adminController.editProject);
//services
route.post("/home/add-serv", adminController.addService);
route.post("/home/delelte-serv/:id", adminController.deleteServ);
route.post("/home/edit-serv/:id", adminController.editServ);
//throw services
route.post("/home/add-throw-serv", adminController.addThrowServ);
route.post("/home/delelte-throw-serv/:id", adminController.deletethrowServ);
route.post("/home/edit-throw-serv/:id", adminController.editThrowServ);
//clints
route.post("/home/add-clint", adminController.addClint);
route.post("/home/edit-clint/:id", adminController.editClint);
route.post("/home/delelte-clint/:id", adminController.deleteClint);
//portfilo
route.post("/home/add-portfillo", adminController.addPortfilo);
route.post("/home/edit-portfillo/:id", adminController.editPrtfilo);
route.post("/home/delelte-portfillo/:id", adminController.deletePortfilo);
//whyus
route.post("/home/whyus", adminController.postWhyUs);
//quality
route.post("/home/quality", adminController.postQuality);
//customer service
route.post("/home/custserv", adminController.postCustserv);
//image
route.post("/upload-img", adminController.uploadImage);
module.exports = route;
