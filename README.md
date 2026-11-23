# BIC21203 Web Development — Lab #4a: Client-Side Scripting (JavaScript)

Name: Muhammad Taufik Bin Mohd Nazree
Student ID: AI250101
Course: BIC21203 Web Development (Academic Session 2026/2027)
Repository: `bic21203-lab4a-javascript`

---

## Overview & Brief Explanation

This repository contains solutions for **Lab #4a: Client-Side Scripting (JavaScript)**, focusing on DOM selection, event handling with `addEventListener()`, conditional input validation, loops, and dynamic element creation using safe text updates (`textContent`).

* **Question 1 — Interactive Text Changer (`q1/`):** Selects `#message` and `#changeBtn` via DOM methods and uses `changeMessage()` attached to a `"click"` event listener to update the paragraph text to `"Hello there!"`.
* **Question 2 — Smart Number Validator (`q2/`):** Reads text input in `checkInput()`, trims and rejects empty/whitespace or non-numeric values (such as `abc`), and uses `if...else if...else` to report whether a valid number (including decimals like `10.5`) is lower than, higher than, or equal to `10` in `#result`.
* **Question 3 — Dynamic Number Generator (`q3/`):** Uses `generateNumbers()` attached to `#generateBtn` to clear `#numberList` before running a `for` loop (`1` to `5`), creating each `<li>` with `document.createElement("li")`, setting its `textContent`, and appending it to the list without duplicates on repeated clicks.

---

## Project Structure

```text
bic21203-lab4a-javascript/
├── README.md
├── q1/
│   ├── index.html
│   └── script.js
├── q2/
│   ├── index.html
│   └── script.js
└── q3/
    ├── index.html
    └── script.js