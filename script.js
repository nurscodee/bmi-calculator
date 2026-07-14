const weight = document.getElementById("weight");
const height = document.getElementById("height");
const calculateBtn = document.getElementById("calculate-btn");
const bmiValue = document.getElementById("bmi-value");
const bmiStatus = document.getElementById("bmi-status");

calculateBtn.addEventListener("click", calculateBMI);

function calculateBMI() {
  const weightValue = parseFloat(weight.value);
  const heightValue = parseFloat(height.value);
  if (!weightValue || !heightValue || weightValue <= 0 || heightValue <= 0) {
    alert("Please enter valid and greater values than 0!");
    return; // ended function here
  }
  const bmi = Number(
    ((weightValue / (heightValue * heightValue)) * 10000).toFixed(2),
  );
  document.getElementById("result-section").classList.add("show");
  bmiValue.textContent = bmi;
  let statusText = "";
  let statusClass = "";

  if (bmi < 18.5) {
    statusText = "Underweight";
    statusClass = "underweight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    statusText = "Normal";
    statusClass = "normal";
  } else if (bmi >= 25.0 && bmi <= 29.9) {
    statusText = "Overweight";
    statusClass = "overweight";
  } else {
    statusText = "Obese";
    statusClass = "obese";
  }
  bmiStatus.textContent = statusText;
  bmiStatus.className = "value status-text " + statusClass;
}
