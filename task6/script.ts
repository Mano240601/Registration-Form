document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting

    let valid = true;

    // Name validation
    let name = document.getElementById("name").value;
    if (name === "") {
        document.getElementById("nameError").textContent = "Name is required";
        valid = false;
    } else {
        document.getElementById("nameError").textContent = "";
    }

    // Email validation
    let email = document.getElementById("email").value;
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email === "") {
        document.getElementById("emailError").textContent = "Email is required";
        valid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent = "Invalid email format";
        valid = false;
    } else {
        document.getElementById("emailError").textContent = "";
    }

    // Password validation
    let password = document.getElementById("password").value;
    if (password === "") {
        document.getElementById("passwordError").textContent = "Password is required";
        valid = false;
    } else if (password.length < 6) {
        document.getElementById("passwordError").textContent = "Password must be at least 6 characters long";
        valid = false;
    } else {
        document.getElementById("passwordError").textContent = "";
    }

    // Confirm password validation
    let confirmPassword = document.getElementById("confirmPassword").value;
    if (confirmPassword !== password) {
        document.getElementById("confirmPasswordError").textContent = "Passwords do not match";
        valid = false;
    } else {
        document.getElementById("confirmPasswordError").textContent = "";
    }

    // Display success or error message
    let formMessage = document.getElementById("formMessage");
    if (valid) {
        formMessage.textContent = "Registration successful!";
        formMessage.style.color = "green";
    } else {
        formMessage.textContent = "Please correct the errors above and try again.";
        formMessage.style.color = "red";
    }
});
