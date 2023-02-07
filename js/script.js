var users = [];

function validateFirstName() {
    var fname = document.signupForm.fname.value;
    var errorMessage = document.getElementById("fname-error");
    
    if (fname === "") {
        errorMessage.innerHTML = "First name is required";
    } else if (!/^[a-zA-Z]+$/.test(fname)) {
        errorMessage.innerHTML = "First name should contain only letters";
    } else {
        errorMessage.innerHTML = "";
    }
}

function validateLastName() {
    var lname = document.signupForm.lname.value;
    var errorMessage = document.getElementById("lname-error");
    
    if (lname === "") {
        errorMessage.innerHTML = "Last name is required";
    } else if (!/^[a-zA-Z]+$/.test(lname)) {
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
    var dob = document.signupForm.dob.value;
    var errorMessage = document.getElementById("dob-error");

    var pattern = /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[012])-[0-9]{4}$/;

    if (dob === "") {
        errorMessage.innerHTML = "Date of Birth is required";
    } else if (!pattern.test(dob)) {
        errorMessage.innerHTML = "Date of Birth should be in the format dd-mm-yyyy";
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
  var fname = document.forms["signupForm"]["fname"].value;
  var lname = document.forms["signupForm"]["lname"].value;
  var email = document.forms["signupForm"]["email"].value;
  var dob = document.forms["signupForm"]["dob"].value;
  var password = document.forms["signupForm"]["password"].value;
  var confirm_password = document.forms["signupForm"]["confirm_password"].value;
  validateFirstName();
  validateLastName();
  validateEmail();
  validateDOB();
  validatePassword();
  validateConfirmPassword();

  // Check if the email already exists
  for (var i = 0; i < users.length; i++) {
    if (users[i].email === email) {
      alert("User with this email already exists");
      return false;
    }
  }
  // Store the user data
  var user = {
    fname: fname,
    lname: lname,
    email: email,
    dob: dob,
    password: password,
  };
  users.push(user);

  // Show the success message
  alert("Signup successful");

  return false;
}
