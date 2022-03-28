require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const multer = require("multer");
const port = process.env.PORT;
const sessionSecret = process.env.session_secret;
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + file.originalname;
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});
var store = new MongoDBStore({
  uri: process.env.DB_URL,
  collection: "mySessions",
});
// Catch errors
store.on("error", function (error) {
  console.log(error);
});
app.use(
  session({
    secret: sessionSecret,
    resave: false,
    store: store,
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 * 60 * 24 },
  })
);
const upload = multer({ storage: storage });
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", express.static("public"));
app.use("/admin/upload-img", upload.array("img", 12));
app.set("view engine", "ejs");

// routes
const adminRoutes = require("./routes/admin");
const authRoute = require("./routes/auth");
const isAdmin = require("./controllers/auth").isAdmin;
app.use("/auth", authRoute);
app.use("/admin", isAdmin, adminRoutes);
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
