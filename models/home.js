const mongoose = require("mongoose");

const homeSchema = mongoose.Schema({
  header: {
    main: String,
    sub: String,
  },
  about: {
    title: String,
    content: String,
    img: String,
  },
  projects: [
    {
      title: String,
      content: String,
    },
  ],
  services: [
    {
      title: String,
      content: String,
    },
  ],
  throwserv: [
    {
      title: String,
      content: String,
      img: String,
    },
  ],
  clints: [String],
  portfilo: [{ title: String, content: String, img: String }],
  whyus: {
    mession: String,
    vision: String,
    princ: String,
  },
  techs: [
    {
      title: String,
    },
  ],
});

module.exports = mongoose.model("Home", homeSchema);
