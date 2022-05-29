// Defining a function to display error message
function printError(elemId, hintMsg) {
    if(hintMsg != ""){
        document.getElementById(elemId).innerHTML = hintMsg;
        document.getElementById(elemId).style.backgroundColor = "white";
    }
    else
        document.getElementById(elemId).innerHTML = hintMsg;
        document.getElementById(elemId).style.backgroundColor = "grey";
}

// Defining a function to validate form 
function validateForm() {
    // Retrieving the values of form elements 
    var username = document.contactForm.username.value;
    var email = document.contactForm.email.value;
    var password = document.contactForm.password.value;
    
	// Defining error variables with a default value
    var usernameErr = emailErr = pwdErr = true;
    
    // Validate username
    if(username == "") {
        printError("usernameErr", "Please enter a valid userusername");
    } else {
        var regex = /^[A-Za-z]\S{2,}$/;                
        if(regex.test(username) === false) {
            printError("usernameErr", "Please enter a valid userusername, no whitepace characters allowedm minimum 3 characters");
        } else {
            printError("usernameErr", "");
            usernameErr = false;
        }
    }
    
    // Validate email address
    if(email == "") {
        printError("emailErr", "Please enter a valid email");
    } else {
        // Regular expression for basic email validation
        var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email");
        } else{
            printError("emailErr", "");
            emailErr = false;
        }
    }
    
    // Validate password number
    if(password == "") {
        printError("pwdErr", "Password must be 8 characters long with atleast 1 digit");
    } else {
        var regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if(regex.test(password) === false) {
            printError("pwdErr", "Password must be 8 characters long with atleast 1 digit");
        } else{
            printError("pwdErr", "");
            pwdErr = false;
        }

    }

    // Prevent the form from being submitted if there are any errors
    if((usernameErr || emailErr || pwdErr) == true) {
       return false;
    } else {
        // Creating a string from input data for preview
        var dataPreview = "You've entered the following details\n" +
                          "User username: " + username + "\n" +
                          "Email Address: " + email + "\n"
        alert(dataPreview);
    }
};