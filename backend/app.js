const express = require("express");

const workoutRoutes = require("./routes/workouts");

const app = express();

app.use(express.json());

app.use((req, _res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/workouts", workoutRoutes);

module.exports = app;
