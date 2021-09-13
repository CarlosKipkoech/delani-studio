"use strict";
const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//static folder

app.use(express.static(path.join(__dirname, "public")));

//sign up route
app.post("/signup", (req, res) => {
  console.log(req.body);
  res.send("hello");
});

let PORT = process.env.PORT || 5500;
app.listen(PORT, console.log(`server started on ${PORT}`));
