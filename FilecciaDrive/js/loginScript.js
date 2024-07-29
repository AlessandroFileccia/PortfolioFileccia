document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents the form from submitting normally
    
    // Get the values entered by the user
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Your fake login logic
    if (username && password) {
        // Redirect to parcoAuto.html
        window.location.href = "index.html";
    } else {
        // Handle empty username or password
        document.getElementById("message").innerText = "Please enter both username and password.";
    }
});


function goBack() {
    window.history.back();
  }