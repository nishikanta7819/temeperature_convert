const input = document.getElementById("input");
const toCelcius = document.getElementById("toCelcius");
const toFahrenheit = document.getElementById("toFahrenheit");
const result = document.getElementById("result");
let temp;

function convert() {
  if (toFahrenheit.checked) {
    temp = Number(input.value);
    temp = (9 / 5) * temp + 32;
    result.textContent = temp + " degree F";
  } else if (toCelcius.checked) {
    temp = Number(input.value);
    temp = (5 / 9) * (temp - 32);
    result.textContent = temp + " degree C";
  } else {
    result.textContent = "Select an operation*";
  }
}
