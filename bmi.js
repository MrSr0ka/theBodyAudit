function getBmi() {
  event.preventDefault();

  weight = document.getElementById("weight").value;
  height = document.getElementById("height").value;
  // age = document.getElementById("age").value;

  let height2 = height * height;

  let bmiPattern = weight / height2;

  document.getElementById("bmiValue").innerText = bmiPattern.toFixed(2);
}
