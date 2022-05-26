function getBmi() {
  event.preventDefault();

  weight = document.getElementById("weight").value;
  height = document.getElementById("height").value;
  age = document.getElementById("age").value;

  let bmiPattern = weight / (height * height);

  document.getElementById("bmiValue").innerText = bmiPattern.toFixed(0);

  return bmiPattern;
}
