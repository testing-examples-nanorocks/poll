const env = require("dotenv").config({ debug: process.env.DEBUG }).parsed;
const morgan = require("morgan");
const rfs = require("rotating-file-stream");
const path = require("path");


const accessLogStream = rfs.createStream(
  path.join(__dirname, env.ACCESS_LOG_PATH),
  {
    size: env.ACCESS_LOG_SIZE,
    interval: env.ACCESS_LOG_INTERVAL,
    compress: env.ACCESS_LOG_COMPRESS,
  }
);

module.exports = morgan("combined", { stream: accessLogStream });