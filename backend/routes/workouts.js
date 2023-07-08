const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ msg: "GET Workouts" });
});

router.post("/", (req, res) => {
  res.json({ msg: "POST Workout" });
});

router.get("/:id", (req, res) => {
  res.json({ msg: "GET a single workout" });
});

router.delete("/:id", (req, res) => {
  res.json({ msg: "DELETE a single workout" });
});

router.patch("/:id", (req, res) => {
  res.json({ msg: "PATCH a single workout" });
});

module.exports = router;
