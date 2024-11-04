function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "baby" && password === "1119") {
        // Show success alert and redirect to index.html
        alert("Login successful!");
        window.location.href = "index2.html";
    } else {
        // Show invalid login alert and refresh the page
        alert("Invalid username or password. Please try again.");
        window.location.reload(); // Refresh the page
    }
}
