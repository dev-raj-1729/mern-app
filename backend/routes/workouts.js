const express = require("express");
const Workout = require("../models/workoutModel");
const {
  createWorkout,
  getWorkouts,
  getWorkout,
} = require("../controllers/workoutController");

const router = express.Router();

router.get("/", getWorkouts);

router.post("/", createWorkout);

router.get("/:id", getWorkout);

router.delete("/:id", (req, res) => {
  res.json({ msg: "DELETE a single workout" });
});

router.patch("/:id", (req, res) => {
  res.json({ msg: "PATCH a single workout" });
});

module.exports = router;
