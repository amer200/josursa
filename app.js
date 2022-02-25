require("dotenv").config();
const express = require("express");
const app = express();
const { default: mongoose } = require("mongoose");
const port = process.env.PORT;

mongoose
  .connect(process.env.DB_URL)
  .then((result) => {
    console.log("connected to db");
    app.listen(port, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`on port ${port}`);
      }
    });
  })
  .catch((err) => {
    console.log(err);
  });
