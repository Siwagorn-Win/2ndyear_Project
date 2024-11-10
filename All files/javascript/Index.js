// Main function that handles the login form submission
function handleLogin(event) {
  event.preventDefault(); // Prevents the default form submission behavior

  // Get the values of the input fields for user ID and password
  const userId = document.getElementById('user-id').value;
  const password = document.getElementById('password').value;

  // Define the correct credentials for authentication
  const correctUserId = "admin"; // Correct username for login
  const correctPassword = "123456"; // Correct password for login

  // Check if the entered credentials match the correct ones
  if (userId === correctUserId && password === correctPassword) {
      showLoginSuccessPopup(); // Show success pop-up if credentials are correct
      window.location.href = "Pages/Menu.html";
  } else {
      showPopup("Incorrect User ID or Password. Please try again."); // Show error pop-up if credentials are incorrect
      document.getElementById('password').value = ''; // Clears the password field for re-entry
  }
}

// Function to display an error message pop-up
function showPopup(message) {
  document.getElementById("popup-message").textContent = message; // Set the pop-up message text
  document.getElementById("popup").style.display = "block"; // Display the error pop-up
  document.getElementById("popup-background").style.display = "block"; // Display a background overlay
}

// Function to close the error pop-up when the close button is clicked
function closePopup() {
  document.getElementById("popup").style.display = "none"; // Hide the error pop-up
  document.getElementById("popup-background").style.display = "none"; // Hide the background overlay
}

// Function to display a success message pop-up after successful login
function showLoginSuccessPopup() {
  document.getElementById("login-success-popup").style.display = "block"; // Display the success pop-up
  document.getElementById("popup-background").style.display = "block"; // Display the background overlay
}

// Function to close the success pop-up when the close button is clicked
function closeLoginSuccessPopup() {
  document.getElementById("login-success-popup").style.display = "none"; // Hide the success pop-up
  document.getElementById("popup-background").style.display = "none"; // Hide the background overlay
}
