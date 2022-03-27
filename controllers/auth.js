const User = require("../models/user");
exports.logIn = (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  User.findOne({ username: username })
    .then((u) => {
      if (!u) {
        res.send({ message: "err: username not found" });
      } else {
        if (u.password == password) {
          req.session.auth = "admin";
          res.redirect("/admin/home");
        } else {
          res.send({ message: "err: wrong password" });
        }
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.getLogIn = (req, res, next) => {
  res.render("admin/login");
};
exports.isAdmin = (req, res, next) => {
  if (req.session) {
    if (req.session.auth == "admin") {
      next();
    } else {
      res.send("not allowed you are not auth");
    }
  } else {
    res.send("not allowed you are not auth");
  }
};
