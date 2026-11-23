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

## Project Overview
Q1
<img width="300" height="176" alt="image" src="https://github.com/user-attachments/assets/85904d0f-0e4a-4248-90df-05d755b175df" />
<img width="312" height="192" alt="image" src="https://github.com/user-attachments/assets/acca316b-e942-4d27-9490-25ab34ba4106" />

Q2
<img width="381" height="477" alt="image" src="https://github.com/user-attachments/assets/5e48404c-e3a2-4996-9777-5261122dfac9" />
<img width="383" height="97" alt="image" src="https://github.com/user-attachments/assets/0e135047-413d-45f5-a0e2-ac1298c87ac3" />

Q3
<img width="372" height="217" alt="image" src="https://github.com/user-attachments/assets/b6ee9d7a-a804-41b8-9cf9-31b803d5a4cb" />


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
