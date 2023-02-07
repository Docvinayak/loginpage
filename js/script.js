var users = [];

function validateFirstName() {
    var first_name = document.signupForm.first_name.value;
    var errorMessage = document.getElementById("first_name-error");
    
    if (first_name === "") {
        errorMessage.innerHTML = "First name is required";
    } else if (!/^[a-zA-Z]+$/.test(first_name)) {
        errorMessage.innerHTML = "First name should contain only letters";
    } else {
        errorMessage.innerHTML = "";
    }
}

function validateLastName() {
    var last_name = document.signupForm.last_name.value;
    var errorMessage = document.getElementById("last_name-error");
    
    if (last_name === "") {
        errorMessage.innerHTML = "Last name is required";
    } else if (!/^[a-zA-Z]+$/.test(last_name)) {
        errorMessage.innerHTML = "Last name should contain only letters";
    } else {
        errorMessage.innerHTML = "";
    }
}

function validateEmail() {
    var email = document.signupForm.email.value;
    var errorMessage = document.getElementById("email-error");
    
    if (email === "") {
        errorMessage.innerHTML = "Email is required";
    } else if (!/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(email)) {
    errorMessage.innerHTML = "Email is invalid";
    } else {
    errorMessage.innerHTML = "";
    }
    }
    
function validatePassword() {
    var password = document.signupForm.password.value;
    var errorMessage = document.getElementById("password-error");
    if (password === "") {
        errorMessage.innerHTML = "Password is required";
    } else if (password.length < 8) {
        errorMessage.innerHTML = "Password should contain at least 8 characters";
    } else if (!/^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9a-z]).{8,}$/.test(password)) {
        errorMessage.innerHTML = "Password should contain at least 1 uppercase letter, 1 symbol, and 1 number";
    } else {
        errorMessage.innerHTML = "";
    }
}

function validateDOB() {
    var errorMessage = document.getElementById("dob-error");
    var dob = new Date(document.signupForm.dob.value);
    var age = new Date().getFullYear() - dob.getFullYear();
    var errorMessage = document.getElementById("dob-error");
    
    if (dob === "") {
        errorMessage.innerHTML = "Date of Birth is required";
    } else if (age < 18) {
      errorMessage.innerHTML = "You must be at least 18 years old";
    } else {
      errorMessage.innerHTML = "";
    }
}


function validateConfirmPassword() {
    var password = document.signupForm.password.value;
    var confirmPassword = document.signupForm.confirm_password.value;
    var errorMessage = document.getElementById("confirm-password-error");
    if (confirmPassword === "") {
        errorMessage.innerHTML = "Confirm password is required";
    } else if (password !== confirmPassword) {
        errorMessage.innerHTML = "Confirm password should match with password";
    } else {
        errorMessage.innerHTML = "";
    }
}

function validateForm() {
  var email = document.forms["signupForm"]["email"].value;
  var password = document.forms["signupForm"]["password"].value;
  validateFirstName();
  validateLastName();
  validateEmail();
  validateDOB();
  validatePassword();
  validateConfirmPassword();

  var users = JSON.parse(localStorage.getItem("users")) || [];
  
  for (var i = 0; i < users.length; i++) {
    if (users[i].email === email) {
        alert("User with this email already exists");
        return false;
    }
  }
  
  var user = {
    email: email,
    password: password
  };
  users.push(user);

  // Store the user in local storage
  localStorage.setItem('users', JSON.stringify(users));

  // Show the success message
  alert("Signup successful");

  return false;
}
