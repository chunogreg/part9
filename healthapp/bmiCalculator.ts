export const calculateBmi = (height: number, weight: number) => {
  const bmi = weight / ((height / 100) * (height / 100));

  if (isNaN(height) || isNaN(weight)) {
    throw new Error(" One of your values is not a number ");
  }

  let msg = "";
  if (bmi < 18.5) msg += "Underweight";
  if (bmi >= 18.5 && bmi <= 24.9) msg += "Normal range";
  if (bmi >= 25 && bmi <= 29.9) msg += "Overweight";
  if (bmi > 30) msg += "Obessed";
  return msg;
};
//console.log(calculateBmi(180, 74));
try {
  // if (process.argv[1] === import.meta.filename) {
  console.log(calculateBmi(Number(process.argv[2]), Number(process.argv[3])));
  // }
} catch (error) {
  let errorMsg = "Something went wrong.";
  if (error instanceof Error) {
    errorMsg += " Error:" + error.message;
  }
  console.log(errorMsg);
}
