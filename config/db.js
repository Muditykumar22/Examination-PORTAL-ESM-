const mongoose = require("mongoose");
require('dotenv').config()

// Replace this with your MONGOURI.
const MONGOURI =
  `mongodb+srv://mudity_22:mju7nhy6@cluster0.fvhz7tw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
const InitiateMongoServer = async () => {
  try {
    await mongoose.connect(MONGOURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    mongoose.set("useFindAndModify", false);
    console.log("Connected to DB !!");
  } catch (e) {
    console.log(e);
    throw e;
  }
};

module.exports = InitiateMongoServer;
