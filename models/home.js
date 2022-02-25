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
  chooseus: [
    {
      title: String,
      content: String,
    },
  ],
  services: [
    {
      title: String,
      content: String,
      details: {
        imgH: String,
        imgS: String,
        Facility: [String],
        faq: [
          {
            question: String,
            answer: String,
          },
        ],
        brochures: [String],
      },
    },
  ],
  logistics: [
    {
      title: String,
      content: String,
      img: String,
      details: {
        imgH: String,
        imgS: String,
        Facility: [String],
        faq: [
          {
            question: String,
            answer: String,
          },
        ],
        brochures: [String],
      },
    },
  ],
  projects: [],
});
