const mongoose = require("mongoose");
const request = require("supertest");
const app = require("../app");

require("dotenv").config();

beforeEach(async () => {
  await mongoose.connect(process.env.MONGO_URI);
});

afterEach(async () => {
  await mongoose.connection.close();
});

describe("GET /api/workouts", () => {
  it(" should return all workouts", async () => {
    const res = await request(app).get("/api/workouts");
    expect(res.statusCode).toBe(200);
  });
});
