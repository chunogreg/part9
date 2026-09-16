interface ExerciseResult {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

//const numArgs = process.argv.slice(2).map(Number);

//const [target, ...restArgs] = numArgs;

export const calculateExercises = (
  args: number[],
  target: number,
): ExerciseResult => {
  //const calculateExercises = (args: number[]): ExerciseResult => {
  for (const val of args) {
    if (isNaN(val)) {
      throw new Error(" One of your values is not a number ");
    }
  }

  let activeDays = 0;
  Number(
    args.forEach((n) => {
      if (n > 0) activeDays += 1;
    }),
  );

  const total = Number(args.reduce((sum, n) => sum + n));
  const average = total / args.length;
  const ratingMetrix = (ave: number) => {
    switch (ave) {
      case Math.round(target - 1):
        return "poor";
      case Math.round(target - 2):
        return "very poor";
      case Math.round(target):
        return "good";
      case Math.round(target + 1):
        return "very good";
      case Math.round(target + 2):
        return "excellent";
      default:
        return "no rating";
    }
  };
  return {
    periodLength: args.length,
    trainingDays: activeDays,
    success: average >= target,
    rating: Math.round(average),
    ratingDescription: String(ratingMetrix(Math.round(average))),
    target: target,
    average: average,
  };
};

try {
  //console.log(calculateExercises(restArgs));
  console.log(calculateExercises([1, 0, 2, 0, 3, 0, 2.5], 2.5));
} catch (error) {
  let errorMsg = "Something went wrong.";
  if (error instanceof Error) {
    errorMsg += " Error:" + error.message;
  }
  console.log(errorMsg);
}

//console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 2));
