require("dotenv").config();

const express = require("express");

const app = express();

app.use((req, _res, next) => {
  console.log(req.path, req.method);
  next();
});

app.get("/", (req, res) => {
  res.json({ msg: "Hello World" });
});

app.listen(process.env.PORT, () => {
  console.log("app listening on port", process.env.PORT);
});
