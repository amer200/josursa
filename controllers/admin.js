const Home = require("../models/home");

// start home handler
exports.getHome = (req, res, next) => {
  Home.findOne()
    .then((data) => {
      if (data) {
        res.render("admin/admin", {
          headerMain: data.header.main,
          headerSub: data.header.sub,
          aboutTitle: data.about.title,
          aboutContent: data.about.content,
          projects: data.projects,
        });
      } else {
        res.render("admin/admin", {
          headerMain: "",
          headerSub: "",
          aboutTitle: "",
          aboutContent: "",
          projects: [],
        });
      }
    })
    .catch((err) => {
      res.send(err);
    });
};
exports.postHomeHeader = (req, res, next) => {
  const main = req.body.main;
  const sub = req.body.sub;
  Home.findOne()
    .then((data) => {
      if (data) {
        data.header.main = main;
        data.header.sub = sub;
        return data.save();
      } else {
        const header = {
          main: main,
          sub: sub,
        };
        const newHome = new Home({
          header: header,
        });
        return newHome.save();
      }
    })
    .then((result) => {
      res.redirect("/admin/home#header");
    })
    .catch((err) => {
      res.send(err);
    });
};
exports.postHomeAbout = (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;
  Home.findOne()
    .then((data) => {
      if (data) {
        data.about.title = title;
        data.about.content = content;
        return data.save();
      } else {
        const about = {
          title: "",
          content: "",
        };
        data.about = about;
        return data.save();
      }
    })
    .then((result) => {
      res.redirect("/admin/home#about");
    })
    .catch((err) => {
      res.send(err);
    });
};
exports.postAddProjects = (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;
  const newProject = {
    title: title,
    content: content,
  };
  Home.findOne()
    .then((data) => {
      data.projects.push(newProject);
      return data.save();
    })
    .then((result) => {
      res.redirect("/admin/home#projects");
    })
    .catch((err) => {
      res.send(err);
    });
};
exports.deleteProject = (req, res, next) => {
  const id = req.params.id;
  Home.findOne()
    .then((data) => {
      const newProjects = data.projects.filter((p) => {
        return p._id.toString() !== id;
      });
      data.projects = newProjects;
      return data.save();
    })
    .then((result) => {
      res.redirect("/admin/home#projects");
    })
    .catch((err) => {
      res.send(err);
    });
};
exports.editProject = (req, res, next) => {
  const id = req.params.id;
  const title = req.body.title;
  const content = req.body.content;
  Home.findOne()
    .then((data) => {
      const newProjects = edit(data.projects, id, title, content);
      data.projects = newProjects;
      return data.save();
    })
    .then((result) => {
      res.redirect("/admin/home#projects");
    })
    .catch((err) => {
      res.send(err);
    });
};
exports.addService = (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;
  const newServ = {
    title: title,
    content: content,
  };
  Home.findOne()
    .then((data) => {
      data.services.push(newServ);
      return data.save();
    })
    .then((result) => {
      res.redirect("/admin/home#services");
    })
    .catch((err) => {
      res.status(500).send("inernal error !");
      console.log(err);
    });
};
exports.deleteServ = (req, res, next) => {
  const id = req.params.id;
  Home.findOne()
    .then((data) => {
      const newServ = data.services.filter((p) => {
        return p._id.toString() !== id;
      });
      data.services = newServ;
      return data.save();
    })
    .then((result) => {
      res.redirect("/admin/home#services");
    })
    .catch((err) => {
      res.send(err);
    });
};
exports.editServ = (req, res, next) => {
  const id = req.params.id;
  const title = req.body.title;
  const content = req.body.content;
  Home.findOne()
    .then((data) => {
      const newservices = edit(data.services, id, title, content);
      data.services = newservices;
      return data.save();
    })
    .then((result) => {
      res.redirect("/admin/home#projects");
    })
    .catch((err) => {
      res.send(err);
    });
};
// end home handler

// assest functions

const edit = (arr, id, title, content) => {
  // this used in edit projects |
  const newArr = arr.map((p) => {
    if (p._id.toString() == id) {
      return { p, title: title, content: content };
    }
    return p;
  });
  return newArr;
};
