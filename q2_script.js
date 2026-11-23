const userInput = document.getElementById("userInput");
const checkBtn = document.getElementById("checkBtn");
const resultEl = document.getElementById("result");

function checkInput() {
  if (!userInput || !resultEl) {
    return;
  }

  const rawValue = userInput.value.trim();
  const num = Number(rawValue);

  if (rawValue === "" || Number.isNaN(num) || !Number.isFinite(num)) {
    resultEl.textContent = "Please enter a valid number!";
  } else if (num < 10) {
    resultEl.textContent = "The number is lower than 10";
  } else if (num > 10) {
    resultEl.textContent = "The number is higher than 10";
  } else {
    resultEl.textContent = "The number is equal to 10";
  }
}

if (checkBtn) {
  checkBtn.addEventListener("click", checkInput);
}