import express from "express";
import type { Request, Response } from "express";
import { calculateBmi } from "./bmiCalculator.ts";
import { calculateExercises } from "./exerciseCalculator.ts";

const app = express();
app.use(express.json());

app.get("/hello", (_req, res) => {
  res.send("Hello Full Stack!");
});

app.get("/bmi", (req: Request, res: Response) => {
  //res.send("Hello Full Stack!");

  const weight = Number(req.query.weight);
  const height = Number(req.query.height);
  if (!weight || !height || isNaN(weight) || isNaN(height)) {
    return res.status(400).json({ error: "malformatted parameters" });
  }
  return res.json({
    weight: weight,
    height: height,
    bmi: calculateBmi(height, weight),
  });
});

app.post("/exercises", (req: Request, res: Response) => {
  const body = req.body as unknown;

  if (
    typeof body !== "object" ||
    body === null ||
    !("daily_exercises" in body) ||
    !("target" in body)
  ) {
    return res.status(400).json({ error: "parameters missing" });
  }

  if (
    !Array.isArray(body.daily_exercises) ||
    !body.daily_exercises.every(
      (exercise): exercise is number | string => typeof exercise === "number",
    ) ||
    !(typeof body.target === "number")
  ) {
    return res.status(400).json({ error: "malformatted parameters" });
  }

  const result = calculateExercises(
    body.daily_exercises.map(Number),
    Number(body.target),
  );
  return res.json(result);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(` Server running on port ${PORT}`);
});
