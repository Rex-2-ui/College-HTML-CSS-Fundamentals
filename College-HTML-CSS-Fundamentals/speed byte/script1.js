const ageInput = document.getElementById("ageInput");
const agreeCheckbox = document.getElementById("agreeCheckbox");
const submitBtn = document.getElementById("submitBtn");
const message = document.getElementById("message");

// --- 1. THE CHECKED PROPERTY ---
// Listen for the checkbox changing, then read its .checked property (true/false).
// The submit button stays disabled until the box is checked.
agreeCheckbox.addEventListener("change", () => {
  submitBtn.disabled = !agreeCheckbox.checked;
});

submitBtn.addEventListener("click", () => {
  const age = Number(ageInput.value);

  // --- 2. WORKING OUT WHICH CATEGORY THE AGE FALLS INTO ---
  // We turn the age into a simple "category" label first,
  // then use a switch statement to decide what to say about it.
  let category;

  if (age < 0) {
    category = "negative";
  } else if (age === 0) {
    category = "justBorn";
  } else if (age > 100) {
    category = "tooOld";
  } else if (age > 18) {
    category = "oldEnough";
  } else {
    category = "tooYoung";
  }

  // --- 3. THE SWITCH STATEMENT ---
  switch (category) {
    case "negative":
      message.textContent = "Age cannot be less than 0.";
      break;
    case "justBorn":
      message.textContent = "You cannot enter the site, you have just been born!";
      break;
    case "tooOld":
      message.textContent = "You are too old to enter the site.";
      break;
    case "oldEnough":
      message.textContent = "You are old enough to enter the site.";
      break;
    case "tooYoung":
      message.textContent = "You must be over 18 in order to enter this site.";
      break;
  }

  // --- 4. THE TERNARY OPERATOR ---
  // A quick way to write an if/else in one line: condition ? valueIfTrue : valueIfFalse
  message.style.color = category === "oldEnough" ? "green" : "red";
});


//how to use hooks
//Languages/ Frameworks
//Api/routing and middle ....
//Security configuration

