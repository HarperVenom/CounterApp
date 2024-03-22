let count = 0;

let savedValues = [];
const screenValue = document.getElementById("screen-value");
const resultField = document.getElementById("result-field");
updateScreenValue();

function updateScreenValue() {
  screenValue.innerHTML = count;

  let saturation = 50;
  let brightness = 80;
  screenValue.style.color = "rgba(35, 35, 35, 0.8)";
  if (count < 0) {
    saturation = 25;
    brightness = 40;
    screenValue.style.color = "white";
  }
  let color = `hsl(${Math.floor(
    (count * 10) % 360
  )},${saturation}%,${brightness}%)`;
  document.body.style.backgroundColor = color;
}

function pressPlus() {
  count++;
  updateScreenValue();
}
function pressMinus() {
  count--;
  updateScreenValue();
}
function saveCount() {
  let currentHTML = resultField.innerHTML;

  if (savedValues.includes(count)) return;

  let lastChar = currentHTML.slice(currentHTML.length - 1);

  let add = (isNaN(lastChar) ? " " : ", ") + count;
  resultField.innerHTML += add;

  // Scrolls down to the last saved value in the result field
  resultField.scrollTop = resultField.scrollHeight;

  savedValues.push(count);
}
function reset() {
  count = 0;
  updateScreenValue();
}

document.getElementById("plus-button").addEventListener("click", pressPlus);
document.getElementById("minus-button").addEventListener("click", pressMinus);
document.getElementById("save-button").addEventListener("click", saveCount);
document.getElementById("reset-button").addEventListener("click", reset);
