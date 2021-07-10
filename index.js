require("rootpath")();

const dotenv = require("dotenv");
dotenv.config(); // Sets up dotenv as soon as our application starts

var express = require("express"),
  app = express(),
  path = require("path"),
  mongoose = require("mongoose");

// static folder
app.use("/", express.static(path.join(__dirname, "public")));

const errorHandler = require("_helpers/error-handler");

// set the view engine to ejs
app.set("view engine", "ejs");

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
