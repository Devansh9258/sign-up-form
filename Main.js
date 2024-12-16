function validateField(fieldId, errorId, validationFn, errorMessage) {
  const field = document.getElementById(fieldId);
  const error = document.getElementById(errorId);

  field.addEventListener("input", function () {
    if (!validationFn(field.value.trim())) {
      error.textContent = errorMessage;
      checkFormValidity();
    } else {
      error.textContent = "";
      checkFormValidity();
    }
  });
}

// Validation Functions
const isOnlyLetters = (value) => /^[a-zA-Z]+$/.test(value);
const isValidMobileNumber = (value) => /^\d{10}$/.test(value);
const isValidEmail = (value) =>
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
    value
  );
const isValidPassword = (value) => value.length >= 6;

// Field Validations
validateField(
  "first-name",
  "firstNameError",
  isOnlyLetters,
  "First name should contain only letters."
);
validateField(
  "last-name",
  "lastNameError",
  isOnlyLetters,
  "Last name should contain only letters."
);
validateField(
  "number",
  "mobileNumberError",
  isValidMobileNumber,
  "Mobile number should be exactly 10 digits."
);
validateField(
  "email",
  "emailError",
  isValidEmail,
  "Please enter a valid email address."
);
validateField(
  "password",
  "passwordError",
  isValidPassword,
  "Password must be at least 6 characters long."
);

const passwordField = document.getElementById("password");
const confirmPasswordField = document.getElementById("confirm-password");
const confirmPasswordError = document.getElementById("confirmPasswordError");
const termsChecked = document.getElementById("terms");
confirmPasswordField.addEventListener("input", function () {
  if (passwordField.value !== confirmPasswordField.value) {
    confirmPasswordError.textContent = "Passwords do not match.";
  } else {
    confirmPasswordError.textContent = "";
  }
  checkFormValidity();
});

termsChecked.addEventListener("change", function () {
  checkFormValidity();
});

function checkFormValidity() {
  const firstName = document.getElementById("first-name").value.trim();
  const lastName = document.getElementById("last-name").value.trim();
  const mobileNumber = document.getElementById("number").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;
  const termsChecked = document.getElementById("terms").checked;

  const allValid =
    isOnlyLetters(firstName) &&
    isOnlyLetters(lastName) &&
    isValidMobileNumber(mobileNumber) &&
    isValidEmail(email) &&
    isValidPassword(password) &&
    password === confirmPassword &&
    termsChecked;

  const submitButton = document.getElementById("submitButton");
  submitButton.disabled = !allValid;
}
