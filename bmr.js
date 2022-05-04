let loaded = true;
if (loaded === true) alert("Script Loaded");

// backend values

// let mass = 85;
// let height = 1.85;
// let age = 27;

// sex to be implemented with another pattern
// let sex = document.getElementById("sex");

// front-end values

let weight;
let height;
let age;

// sex to be implemented with another pattern
// let sex = document.getElementById("sex");
// let sexCalc = sex.value;

let bmrPattern;
let bmrTotal;

// bmrTotal = bmrPattern * 1.4;

//activities types
let lowActivity;
let midActivity;
let highActivity;
let dailyActivity;
let intesneActivity;
let extremeActivity;

//macro calories

const proteinKcal = 4;
const carbsKcal = 4;
const fatsKcal = 9;

// dividing bmrTotal by 0.3 means 30% of bmrTotal (total kcal)
//  will be allocated to proteins

let proteinsMacro = bmrTotal * 0.3;
let proteinsPercent = (proteinsMacro / bmrTotal) * 100;
let proteinsGrams = proteinsMacro / proteinKcal;

let carbsMacro = bmrTotal * 0.5;
let carbsPercent = (carbsMacro / bmrTotal) * 100;
let carbsGrams = carbsMacro / carbsKcal;

let fatsMacro = bmrTotal * 0.3;
let fatsPercent = (fatsMacro / bmrTotal) * 100;
let fatsGrams = fatsMacro / fatsKcal;

//answers giving amount of macros in GRAMS and kcal coming from macronutrients

console.log(
  `You need ${proteinsMacro.toFixed(
    0
  )} calories coming from Protiens. Proteins total percent is ${proteinsPercent}%. Which consists of ${proteinsGrams.toFixed(
    0
  )} grams of Proteins.  `
);

console.log(
  `You need ${carbsMacro.toFixed(
    0
  )} calories coming from Carbs. Carbs total percent is ${carbsPercent}%. Which consists of ${carbsGrams.toFixed(
    0
  )} grams of Carbs.`
);

console.log(
  `You need ${fatsMacro.toFixed(
    0
  )} calories coming from Fats. Fats total percent is ${fatsPercent}%. Which consists of ${fatsGrams.toFixed(
    0
  )} grams of Fats.`
);

// number of meals = bmrTotal divided by number of desired meals

let mealsKcal = bmrTotal / 3;

// returns bmrTotal into h1 on the page on subit click

function getBmrKcal() {
  event.preventDefault();
  weight = document.getElementById("weight").value;
  height = document.getElementById("height").value;
  age = document.getElementById("age").value;

  bmrPattern = 66.47 + 13.75 * weight + 5.003 * height - 6.755 * age;

  lowActivity = bmrPattern * 1.1;
  midActivity = bmrPattern * 1.2;
  highActivity = bmrPattern * 1.4;
  dailyActivity = bmrPattern * 1.6;
  intenseActivity = bmrPattern * 1.7;
  extremeActivity = bmrPattern * 1.8;

  document.getElementById("bmrKcal").innerText = bmrPattern.toFixed(0);
  document.getElementById(
    "lowActivity"
  ).innerText = `Low activity caloric need is ${lowActivity.toFixed(
    0
  )} kcal per day.`;
  document.getElementById(
    "midActivity"
  ).innerText = `Moderate activity caloric need is ${midActivity.toFixed(
    0
  )} kcal per day.`;
  document.getElementById(
    "highActivity"
  ).innerText = `High activity caloric need is ${highActivity.toFixed(
    0
  )} kcal per day.`;
  document.getElementById(
    "dailyActivity"
  ).innerText = `Daily activity caloric need is ${dailyActivity.toFixed(
    0
  )} kcal per day.`;
  document.getElementById(
    "intenseActivity"
  ).innerText = `Intense activity caloric need is ${intenseActivity.toFixed(
    0
  )} kcal per day.`;
  document.getElementById(
    "extremeActivity"
  ).innerText = `Extreme activity caloric need is ${extremeActivity.toFixed(
    0
  )} kcal per day.`;
}
