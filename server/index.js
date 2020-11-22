"use strict";
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const morgan = require("morgan");

const routes = require("./routes");

const PORT = 4000;

const buildPath = path.join(__dirname, "..", "client/build");

console.log("Build path is", buildPath);

express()
  .use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Methods",
      "OPTIONS, HEAD, GET, PUT, POST, DELETE"
    );
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  })
  .use(morgan("tiny"))
  // .use(express.static("./server/assets"))
  .use(express.static(buildPath))
  .use(bodyParser.json())
  .use(express.urlencoded({ extended: false }))
  .use("/", express.static(__dirname + "/"))
  .use("/api", routes)

  .get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  })

  .listen(PORT, () => console.info(`Listening on port ${PORT}`));
