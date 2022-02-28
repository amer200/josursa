const Home = require("../models/home");
const img = require("../models/img");
const Img = require("../models/img");
// start home handler
exports.getHome = (req, res, next) => {
  Home.findOne()
    .then((data) => {
      Img.find().then((imgs) => {
        let categs = [];
        imgs.forEach((i) => {
          categs.push(i.categ);
        });
        const uniCategs = uniArr(categs);
        if (data) {
          res.render("admin/admin", {
            headerMain: data.header.main,
            headerSub: data.header.sub,
            aboutTitle: data.about.title,
            aboutContent: data.about.content,
            projects: data.projects,
            servs: data.services,
            throwservs: data.throwservs,
            clints: data.clints,
            portfillo: data.portfilo,
            whyus: data.whyus,
            imgs: imgs,
            imgsCategs: uniCategs,
            quality: data.quality,
            custserv: data.custserv,
          });
        } else {
          res.render("admin/admin", {
            headerMain: "",
            headerSub: "",
            aboutTitle: "",
            aboutContent: "",
            projects: [],
            servs: [],
            throwservs: [],
            clints: [],
            portfillo: [],
            whyus: {
              mession: "",
              vision: "",
              princ: "",
            },
            imgs: imgs,
            imgsCategs: [],
            quality: [],
            custserv: [],
          });
        }
      });
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
      res.redirect("/admin/home#services");
    })
    .catch((err) => {
      res.send(err);
    });
};
exports.addThrowServ = (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;
  const img = req.body.img;
  const newThrowServ = {
    title: title,
    content: content,
    img: img,
  };
  Home.findOne()
    .then((data) => {
      data.throwservs.push(newThrowServ);
      return data.save();
    })
    .then((result) => {
      res.redirect("/admin/home#throw-services");
    })
    .catch((err) => {
      res.status(500).send("inernal error !");
      console.log(err);
    });
};
exports.deletethrowServ = (req, res, next) => {
  const id = req.params.id;
  Home.findOne()
    .then((data) => {
      const newServ = data.throwservs.filter((p) => {
        return p._id.toString() !== id;
      });
      data.throwservs = newServ;
      return data.save();
    })
    .then((result) => {
      res.redirect("/admin/home#throw-services");
    })
    .catch((err) => {
      res.send(err);
    });
};
exports.editThrowServ = (req, res, next) => {
  const id = req.params.id;
  const title = req.body.title;
  const content = req.body.content;
  const img = req.body.img;
  Home.findOne()
    .then((data) => {
      const newThrowservices = edit(data.throwservs, id, title, content, img);
      data.throwservs = newThrowservices;
      return data.save();
    })
    .then((result) => {
      res.redirect("/admin/home#throw-services");
    })
    .catch((err) => {
      res.send(err);
    });
};
exports.addClint = (req, res, next) => {
  const name = req.body.name;
  const website = req.body.website;
  const img = req.body.img;
  const newClint = {
    name: name,
    website: website,
    img: img,
  };
  Home.findOne()
    .then((data) => {
      data.clints.push(newClint);
      return data.save();
    })
    .then((result) => {
      res.redirect("/admin/home#clints");
    })
    .catch((err) => {
      res.status(500).send("inernal error !");
      console.log(err);
    });
};
exports.editClint = (req, res, next) => {
  const id = req.params.id;
  const name = req.body.name;
  const website = req.body.website;
  const img = req.body.img;
  Home.findOne()
    .then((data) => {
      const newClint = edit(data.clints, id, 0, 0, img, name, website);
      data.clints = newClint;
      return data.save();
    })
    .then((result) => {
      res.redirect("/admin/home#clints");
    })
    .catch((err) => {
      res.send(err);
    });
};
exports.deleteClint = (req, res, next) => {
  const id = req.params.id;
  Home.findOne()
    .then((data) => {
      const newClint = data.clints.filter((p) => {
        return p._id.toString() !== id;
      });
      data.clints = newClint;
      return data.save();
    })
    .then((result) => {
      res.redirect("/admin/home#clints");
    })
    .catch((err) => {
      res.send(err);
    });
};
exports.addPortfilo = (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;
  const img = req.body.img;
  Home.findOne()
    .then((data) => {
      const newPortfillo = {
        title: title,
        content: content,
        img: img,
      };
      data.portfilo.push(newPortfillo);
      return data.save();
    })
    .then((result) => {
      res.redirect("/admin/home#portfillo");
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.editPrtfilo = (req, res, next) => {
  const id = req.params.id;
  const title = req.body.title;
  const content = req.body.content;
  const img = req.body.img;
  Home.findOne()
    .then((data) => {
      const newPortfillo = edit(data.portfilo, id, title, content, img, 0, 0);
      data.portfilo = newPortfillo;
      return data.save();
    })
    .then((result) => {
      res.redirect("/admin/home#portfillo");
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.deletePortfilo = (req, res, next) => {
  const id = req.params.id;
  Home.findOne()
    .then((data) => {
      const newportfilo = data.portfilo.filter((p) => {
        return p._id.toString() !== id;
      });
      data.portfilo = newportfilo;
      return data.save();
    })
    .then((result) => {
      res.redirect("/admin/home#portfillo");
    })
    .catch((err) => {
      res.send(err);
    });
};
exports.postWhyUs = (req, res, next) => {
  const mession = req.body.mession;
  const vision = req.body.vision;
  const princ = req.body.princ;
  const myObj = {
    mession: mession,
    vision: vision,
    princ: princ,
  };
  Home.findOne()
    .then((data) => {
      data.whyus = myObj;
      return data.save();
    })
    .then((result) => {
      res.redirect("/admin/home#why-us");
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.postQuality = (req, res, next) => {
  const content = req.body.content;
  const feats = req.body.feats;
  const img = req.body.img;
  Home.findOne()
    .then((data) => {
      data.quality.content = content;
      data.quality.feats = feats;
      data.quality.img = img;
      return data.save();
    })
    .then((result) => {
      res.redirect("/admin/home#quality");
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.uploadImage = (req, res, next) => {
  const files = req.files;
  const categ = req.body.categ;
  let imgs = [];
  files.forEach((f) => {
    const img = {
      path: f.path,
      categ: categ,
    };
    imgs.push(img);
  });
  Img.find();
  Img.insertMany(imgs)
    .then((result) => {
      res.redirect("/admin/home#image");
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.postCustserv = (req, res, next) => {
  const name = req.body.name;
  const img = req.body.img;
  const facebook = req.body.facebook;
  const twitter = req.body.twitter;
  const insta = req.body.insta;
  const linkedin = req.body.linkedin;
  const cust = {
    name: name,
    img: img,
    facebook: facebook,
    twitter: twitter,
    insta: insta,
    linkedin: linkedin,
  };
  Home.findOne()
    .then((data) => {
      data.custserv = cust;
      return data.save();
    })
    .then((result) => {
      res.redirect("/admin/home#custserv");
    })
    .catch((err) => {
      console.log(err);
    });
};
// end image handllers
// assest functions

// this used in edit projects | editi servs | edit throwservs | edit clints | edit portfillo
// how to use >>> 1)arr is must , arr = the array you want to update  2) if element doesn't have one of parm put param = 0 or any value
const edit = (arr, id, title, content, img, name, website) => {
  console.log("run");
  const newArr = arr.map((p) => {
    if (p._id.toString() == id) {
      return {
        p,
        title: title,
        content: content,
        name: name,
        website: website,
        img: img,
      };
    }
    return p;
  });
  return newArr;
};
// remove dubicated value from arr
const uniArr = (arr) => [...new Set(arr)];
