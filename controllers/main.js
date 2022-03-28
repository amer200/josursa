const Home = require("../models/home");
exports.getData = (req, res, next) => {
  Home.findOne()
    .then((h) => {
      if (h) {
        res.send({ data: h });
      } else res.send({ data: [] });
    })
    .catch((err) => {
      console.log(err);
    });
};
