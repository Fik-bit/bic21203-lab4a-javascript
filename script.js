const generateBtn = document.getElementById("generateBtn");
const numberList = document.getElementById("numberList");

function generateNumbers() {
  if (!numberList) {
    return;
  }

  numberList.textContent = "";

  for (let i = 1; i <= 5; i++) {
    const li = document.createElement("li");
    li.textContent = `The number is ${i}`;
    numberList.appendChild(li);
  }
}

if (generateBtn) {
  generateBtn.addEventListener("click", generateNumbers);
}