require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const app = require("./app");

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Connected to DB & app listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
