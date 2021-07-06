require("rootpath")();

const dotenv = require("dotenv");
dotenv.config(); // Sets up dotenv as soon as our application starts

var express = require("express"),
  app = express(),
  fs = require("fs"),
  cors = require("cors"),
  morgan = require("morgan"),
  bodyParser = require("body-parser"),
  router = express.Router(),
  mongoose = require("mongoose");

const errorHandler = require("_helpers/error-handler");

// Setup Connection to DB
exports.db = mongoose.connect(
  "mongodb://" + process.env.DB_HOST + "/" + process.env.DB_DATABASE,
  { useNewUrlParser: true }
);

//GROUP APP ROUTES
app.use('/',require('routes/productsRoute'));

// global error handler
app.use(errorHandler);

// Start server
app.listen(process.env.PORT, function () {
  console.log("Node server running on http://localhost:" + process.env.PORT);
});
