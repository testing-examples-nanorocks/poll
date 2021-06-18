const env = require("dotenv").config({ debug: process.env.DEBUG }).parsed;
const mongoose = require("mongoose");

// mongoDb init
mongoose.connect(env.MONGOOSE_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Mongoose connected!!!");
});


module.exports = db;
