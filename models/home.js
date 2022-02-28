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
  throwservs: [
    {
      title: String,
      content: String,
      img: String,
    },
  ],
  clints: [
    {
      name: String,
      website: String,
      img: String,
    },
  ],
  portfilo: [{ title: String, content: String, img: String }],
  whyus: {
    mession: String,
    vision: String,
    princ: String,
  },
  quality: {
    content: String,
    feats: [String],
    img: String,
  },
  custserv: [
    {
      name: String,
      img: String,
      facebook: String,
      twitter: String,
      insta: String,
      linkedin: String,
    },
  ],
});

module.exports = mongoose.model("Home", homeSchema);
