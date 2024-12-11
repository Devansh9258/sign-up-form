document
  .getElementById("signUpForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const firstName = document.getElementById("first-name").value.trim();
    const lastName = document.getElementById("last-name").value.trim();
    const mobileNumber = document.getElementById("number").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const errorMessage = document.getElementById("errorMessage");

    errorMessage.textContent = "";

    if (!/^[a-zA-Z]+$/.test(firstName)) {
      errorMessage.textContent = "First name should contain only letters.";
    } else if (!/^[a-zA-Z]+$/.test(lastName)) {
      errorMessage.textContent = "Last name should contain only letters.";
    } else if (!/^\d{10}$/.test(mobileNumber)) {
      errorMessage.textContent = "Mobile number should be exactly 10 digits.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errorMessage.textContent = "Please enter a valid email address.";
    } else if (password.length < 6) {
      errorMessage.textContent = "Password must be at least 6 characters long.";
    } else if (password !== confirmPassword) {
      errorMessage.textContent = "Passwords do not match.";
    } else {
      alert("Form submitted successfully!");
      document.getElementById("signUpForm").reset();
    }
  });
