
// PART 1: EVENT HANDLING — Theme Toggle (Dark/Light Mode)
// =============================================================
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

// Listen for click on theme toggle button
themeToggle.addEventListener("click", function () {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    themeToggle.textContent = "☀️ Toggle Light Mode";
  } else {
    themeToggle.textContent = "🌙 Toggle Dark Mode";
  }
});

// 🎮 PART 2: INTERACTIVE ELEMENTS — FAQ Accordion
// =============================================================

// Select all FAQ question buttons
const faqQuestions = document.querySelectorAll(".faq-question");

// Add click event to each
faqQuestions.forEach((button) => {
  button.addEventListener("click", function () {
    // Find the answer div that comes right after the button
    const answer = this.nextElementSibling;

    // Toggle 'show' class to display/hide
    answer.classList.toggle("show");

  });
});

// PART 3: FORM VALIDATION — Custom JS Validation
// =============================================================
const form = document.getElementById("registerForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

// Helper function to set error message and style
function setError(element, message, errorElement) {
  element.classList.add("invalid");
  element.classList.remove("valid");
  errorElement.textContent = message;
}

// Helper function to clear error
function setSuccess(element, errorElement) {
  element.classList.add("valid");
  element.classList.remove("invalid");
  errorElement.textContent = "";
}

// Validate name (at least 2 characters)
function validateName() {
  const name = nameInput.value.trim();
  if (name.length < 2) {
    setError(nameInput, "Name must be at least 2 characters.", nameError);
    return false;
  } else {
    setSuccess(nameInput, nameError);
    return true;
  }
}

// Validate email with regex
function validateEmail() {
  const email = emailInput.value.trim();
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!re.test(email)) {
    setError(emailInput, "Please enter a valid email address.", emailError);
    return false;
  } else {
    setSuccess(emailInput, emailError);
    return true;
  }
}

// Validate password (min 6 chars, 1 number, 1 letter)
function validatePassword() {
  const password = passwordInput.value;
  const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
  if (!re.test(password)) {
    setError(
      passwordInput,
      "Password must be at least 6 characters and include at least one letter and one number.",
      passwordError
    );
    return false;
  } else {
    setSuccess(passwordInput, passwordError);
    return true;
  }
}

// Real-time validation on input
nameInput.addEventListener("input", validateName);
emailInput.addEventListener("input", validateEmail);
passwordInput.addEventListener("input", validatePassword);

// Form submission validation
form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Validate all fields
  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  const isPasswordValid = validatePassword();

  // If all valid, show success
  if (isNameValid && isEmailValid && isPasswordValid) {
    alert("✅ Form submitted successfully!");
    form.reset(); // Optional: reset form after success
    // Clear all success styles after reset
    [nameInput, emailInput, passwordInput].forEach((input) => {
      input.classList.remove("valid");
    });
  } else {
    alert("❌ Please fix errors before submitting.");
  }
});
