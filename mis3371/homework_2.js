/*
Author: Ana Jara
File: homework_2.js
Date created: 9/15/2025
Date last edited: 10/26/2025
Description: MIS 3371 Homework 2 - Allowing JavaScript functions for the patient form.
*/

//dynamic date js code
const d = new Date();
let text = d.toLocaleDateString();
document.getElementById("today").innerHTML = text;

//dynamic range slider element
let slider = document.getElementById("range");
let output = document.getElementById("range-slider");
output.innerHTML = slider.value;

slider.oninput = function () {
    output.innerHTML = this.value;
};

// dob validation js code
function validateDob() {
    dob=document.getElementById("dob")
    let date = new Date(dob.value);
    let maxDate = new Date().setFullYear(new Date().getFullYear() - 120);

    if (date > new Date()) {
        document.getElementById("dob-error").innerHTML = 
        "Date can't be in the future";
        dob.value = "";
        return false;
    } else if (date < new Date(maxDate)) {
        document.getElementById("dob-error").innerHTML = 
        "Date can't be more than 120 years ago";
        dob.value = "";
        return false;
    } else {
        document.getElementById("dob-error").innerHTML = "";
        return true;
    }
}

// ssn validation js code
function validateSsn() {
    const ssn = document.getElementById("ssn").value;
    //regex for ssn pattern requirement
    const ssnR = /^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/;

    if (!ssnR.test(ssn)) {
        document.getElementById("ssn-error").innerHTML = 
        "Please enter a valid Social Security Number";
        return false;
    } else {
        document.getElementById("ssn-error").innerHTML = "";
        return true;
    }
}

// address 1 validation js code 
function validateAddress1() {
    var ad1 = document.getElementById("address1").value;
    console.log(ad1);
    console.log(ad1.length);

    if (ad1.length < 2) {
        document.getElementById("address1-error").innerHTML =
        "Please enter your full address"
        return false;
    } else {
        document.getElementById("address1-error").innerHTML = "";
        return true;
    }
}

// address 2 validation js code 
function validateAddress2() {
    var ad2 = document.getElementById("2").value;
    console.log(ad2);
    console.log(ad2.length);

    if (ad2.length < 2) {
        document.getElementById("addr2-error").innerHTML =
        "Please enter your full address"
        return false;
    } else {
        document.getElementById("addr2-error").innerHTML = "";
        return true;
    }
}

// zip code validation js code
function validatezip() {
    const zipInput = document.getElementById("zip");
    let zip = zipInput.value.replace(/[^\d-]/g, "");

    if (!zip) {
        document.getElementById("zip-error").innerHTML = 
        "Zip code can't be blank";
        return false;
    }

    if (zip.length > 5) {
        zip = zip.slice(0, 5) + "-" + zip.slice(5, 9);
    } else {
        zip = zip.slice(0, 5);
    }

    zipInput.value = zip;
    document.getElementById("zip-error").innerHTML = "";
    return true;
}

//email validation js code
function validateEmail() {
    email = document.getElementById("email").value;
    var emailR = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (email =="") {
    document.getElementById ("email-error").innerHTML =
    "Email cannot be empty.";
    return false;
} else if (!email.match(emailR)){
    document.getElementById ("email-error").innerHTML =
    "Please enter a valid email address."
    return false;
} else {
    document.getElementById ("email-error").innerHTML = ""; 
    return true;
    }
}

// phone number validation js code
function validatePhone() {
    const phoneInput = document.getElementById("phone");
    const phone = phoneInput.value.replace(/\D/g,"");

    if (phone.length !== 10) {
    document.getElementById("phone-error").innerHTML = 
    "Phone number cannot be left blank.";
    return false;
    }

    const formattedPhone = phone.slice(0,3) + "-" + phone.slice(3,6) + "-" + phone.slice(6,10)
    phoneInput.value = formattedPhone;
    document.getElementById("phone-error").innerHTML = "";
    return true
}

//username validation js code
function validateUsername() {
    username = document.getElementById("username").value;

    //converts username to lowercase 
    username = username.toLowerCase();
    //display username in lowercase
    document.getElementById("username").value = username;

     if (username.length == 0) {
        document.getElementById("username-error").innerHTML = 
        "Username cannot be blank";
        return false;
    }

    if (!isNaN(username.charAt(0))) {
        document.getElementById("username-error").innerHTML = 
        "Username cannot start with a number";
        return false;
    }

    let regex = /^[a-zA-Z0-9_-]+$/;
    if (!regex.test(username)) {
        document.getElementById("username-error").innerHTML = 
        "Username can only have letters, numbers, underscores, and dashes";
        return false;
    } else if (username.length < 5) { //no less than 5 characters
        document.getElementById("username-error").innerHTML = 
        "Username must be at least 5 characters";
        return false;
    } else if (username.length > 30) { //no more than 30 characters
        document.getElementById("username-error").innerHTML = 
        "Username can't exceed 30 characters";
        return false;
    } else { 
        document.getElementById("username-error").innerHTML = "";
        return true;
    }
}

//password validation js code
function validatePassword() {
    const password = document.getElementById("password").value;
    const username = document.getElementById("username").value;

    //sets up the array
    const errorMessage = [];

    //checks for lowercase characters
    if (!password.match(/[a-z]/)) {
        errorMessage.push("Enter at least one lowercase letter");
    }
    //checks for uppercase characters
    if (!password.match(/[A-Z]/)) {
        errorMessage.push("Enter at least one uppercase letter");
    } 
    //checks for numbers 
    if (!password.match(/[0-9]/)) {
        errorMessage.push("Enter at least one number");
    }
    //checks for special characters
    if (!password.match(/[!\@#\$%&*\-_\\.+\(\)]/)) {
        errorMessage.push("Enter at least one special character");
    }

    if (password == username || password.includes(username)) {
        errorMessage.push("Password can't contain username");
    }

    //displays error message if there are any errors
    const errorContainer = document.querySelector(".password-message");
    errorContainer.innerHTML = errorMessage
    .map((message) => `<span>${message}</span><br/>`)
    .join("");
}

//confirming password validation js code
function confirmPassword() {
    password1 = document.getElementById("password").value;
    password2 = document.getElementById("ConfirmPassword").value;

    if (password1 !== password2) {
        document.getElementById("confirmpassword-error").innerHTML =
        "Passwords do not match";
        return false;
    } else {
        document.getElementById("confirmpassword-error").innerHTML =
        "Passwords match";
        return true;
    }
}

//review data button - redisplay all of the user input in a table
function reviewInput() {
    var formcontent = document.getElementById("signup")
    var formoutput;
    var i;
    formoutput = "<table class='output'><th colspan = '3'>Review Your information:</th>";
    for (let i = 0; i < formcontent.length; i++) {
        if (formcontent.elements[i].value !== "") {
            switch (formcontent.elements[i].type) {
                case "checkbox":
                    if (formcontent.elements[i].checked) {
                        formoutput += `<tr><td align='right'>${formcontent.elements[i].name}</td><td>&#x2713;</td></tr>`;
                    }
                    break;
                case "radio":
                    if (formcontent.elements[i].checked) {
                        formoutput += `<tr><td align='right'>${formcontent.elements[i].name}</td><td>${formcontent.elements[i].value}</td></tr>`;
                    }
                    break;
                default:
                    formoutput += `<tr><td align='right'>${formcontent.elements[i].name}</td><td>${formcontent.elements[i].value}</td></tr>`;
            }
        }
    }
    formoutput += "</table>";
    document.getElementById("showInput").innerHTML = formoutput;
}

//remove review data
function removeReview() {
    document.getElementById("showInput").innerHTML = "";
}

