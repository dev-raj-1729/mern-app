const express = require("express");
const Workout = require("../models/workoutModel");
const {
  createWorkout,
  getWorkouts,
  getWorkout,
  updateWorkout,
  deleteWorkout,
} = require("../controllers/workoutController");

const router = express.Router();

router.get("/", getWorkouts);

router.post("/", createWorkout);

router.get("/:id", getWorkout);

router.delete("/:id", deleteWorkout);

router.patch("/:id", updateWorkout);

module.exports = router;
