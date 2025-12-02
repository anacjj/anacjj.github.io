/*
Author: Ana Jara
File: homework_4.js
Date created: 9/15/2025
Date last edited: 12//2025
Description: MIS 3371 Homework 4 - Allowing JavaScript functions for the patient form. 
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

//first name validate js code
function validateFname() {
    firstname=document.getElementById("firstname").value.trim();
    var namePattern = /^[a-zA-Z'-]+$/;
    //checks if first name is empty
    if (firstname == "") { 
        document.getElementById("firstname-error").innerHTML = "First name field cannot be left blank"
        return false;
    } else if (firstname !="") {
        if (!firstname.match(namePattern)) { //check if it matches the required patterns
        document.getElementById("firstname-error").innerHTML = "Letters, apostrophes, and dashes only.";
        return false;
    } else if (firstname.length < 2) { //checks if name is at least 1 character 
        document.getElementById("firstname-error").innerHTML = "First name cannot be less than 2 characters.";
        return false;
    } else if (firstname.length > 30) { //checks if name is 30 characters
        document.getElementById("firstname-error").innerHTML = "First name cannot be more than 30 characters.";
        return false;
    } else {
        document.getElementById("firstname-error").innerHTML = "";
        return true;
    }

    }
}

// middle initial validate js code
function validateMiddleinit() {
    middleinit = document.getElementById("middleinit").value;
    var namePattern = /^[A-Z]+$/;

    //makes middle initial uppercase
    middleinit = middleinit.toUpperCase();
    document.getElementById("middleinit").value = middleinit;

    //validate that the middle initital is exactly one uppercase letter
    if (!middleinit.match(namePattern)) {
        document.getElementById("middleinit-error").innerHTML = "Middle initial must be a single uppercase letter";
        return false;
    } else {
        document.getElementById("middleinit-error").innerHTML = "";
        return true;
    }
}

//last name validate js code
function validateLname() {
    lastname=document.getElementById("lastname").value.trim();
    var namePattern = /^[a-zA-Z'-]+$/;
    //checks if first name is empty
    if (lastname == "") { 
        document.getElementById("lastname-error").innerHTML = "First name field cannot be left blank"
        return false;
    } else if (lastname != "") {
        if (!lastname.match(namePattern)) { //check if it matches the required patterns
        document.getElementById("lastname-error").innerHTML = "Letters, apostrophes, and dashes only.";
        return false;
    } else if (lastname.length < 2) { //checks if name is at least 1 character 
        document.getElementById("lastname-error").innerHTML = "First name cannot be less than 2 characters.";
        return false;
    } else if (lastname.length > 30) { //checks if name is no more than 30 characters
        document.getElementById("lastname-error").innerHTML = "First name cannot be more than 30 characters.";
        return false;
    } else {
        document.getElementById("lastname-error").innerHTML = "";
        return true;
    }
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
    var ad2 = document.getElementById("address2").value;
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

//city validation js code
function validateCity() {
    city = document.getElementById("city").value.trim();

    if (!city) {
        document.getElementById("city-error").innerHTML = "City can't be blank";
        return false;
    } else {
        document.getElementById("city-error").innerHTML = "";
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

    // Check if password is empty
    if (password.length === 0) {
        errorMessage.push("Password cannot be blank");
    }

    //displays error message if there are any errors
    const errorContainer = document.querySelector(".password-message");
    errorContainer.innerHTML = errorMessage
    .map((message) => `<span>${message}</span><br/>`)
    .join("");

    if (errorMessage.length > 0) {
        return false;
    } else {
        return true;
    }

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

//show alert box when necessary due to missing fields js code
function showAlert() {
    var alertBox = document.getElementById("alert-box")
    var closeAlert = document.getElementById("close-alert")

    alertBox.style.display = "block"
    closeAlert.onclick = function() {
        alertBox.style.display ="none"
    }
}

//validate everything button on form js code 
function validateEverything() {
    let valid = true

    if (!validateFname()) {
        valid = false;
    }
    if (!validateMiddleinit()) {
        valid = false;
    }
    if (!validateLname()) {
        valid = false;
    }
    if (!validateDob()) {
        valid = false;
    }
    if (!validateSsn()) {
        valid = false;
    }
    if (!validateAddress1()) {
        valid = false;
    }
    if (!validateAddress2()) {
        valid = false;
    }
    if (!validateCity()) {
        valid = false;
    }
    if (!validatezip()) {
        valid = false;
    }
    if (!validateEmail()) {
        valid = false;
    }
    if (!validatePhone()) {
        valid = false;
    }
    if (!validateUsername()) {
        valid = false;
    }
    if (!validatePassword()) {
        valid = false;
    }
    if (!confirmPassword()) {
        valid = false;
    }
     if (valid) {
         document.getElementById("submit").disabled = false;
     } else {
        showAlert();
     }
 }


//cookies to remember input on form //
function setCookie(name, cvalue, expiryDays) {
    var day = new Date();
    day.setTime(day.getTime() + (expiryDays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + day.toUTCString();
    document.cookie = name + "=" + cvalue + ";" + expires + ";path=/";
}

//retrieving cookies by its name
function getCookie(name) {
    var cookieName = name + "=";
    var cookies = document.cookie.split(';');

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        while (cookie.charAt(0) == ' ') { //dont add space it will crash
           cookie = cookie.substring(1);
        }
        if (cookie.indexOf(cookieName) == 0) {
            return cookie.substring(cookieName.length, cookie.length);
        }
    }
    return ""; // only works with: space?? - correct answer: no space
}

//declaring what values are being saved in cookies 
var inputs = [
    {id: "firstname", cookieName: "firstName"},
    {id: "middleinit", cookieName: "middleInitial"},
    {id: "lastname", cookieName: "lastName"},
]

//automatically populate saved cookie values in field and updates cookies if any changes 
inputs.forEach(function(input) {
    var inputElement = document.getElementById(input.id);

    //prefill input fields with value from cookie
    var cookieValue = getCookie(input.cookieName);
    if (cookieValue !== "") { //correct: NO SPACE??? works with: SPACE??
        inputElement.value = cookieValue;
    }

    //set a cookie when the input field changes
    inputElement.addEventListener("input", function() {
        setCookie(input.cookieName, inputElement.value, 30);
    });
});

//greets returning user with their name + message stored in cookies that were set
var firstName = getCookie("firstName");
if (firstName !== "") {
    document.getElementById("welcome1").innerHTML = "Welcome back, " + firstName + "!</b><br>";
    document.getElementById("welcome2").innerHTML =
        "<a href='#' id='new-user'>Not " + 
        firstName + 
        "? Click here to start a new form.</a>";

    document.getElementById("new-user").addEventListener("click", function() {
        inputs.forEach(function (input) {
            setCookie(input.cookieName, "", -1);
        });
        location.reload();
    });
}

//fetch api for the states dropdown function

//display states in dropdown
function displayStates(statesHTML) {
    var stateDropdown = document.getElementById('state');
    stateDropdown.innerHTML += statesHTML;
    console.log('States loaded successfully!');
}

//fetch states from external file (states.html)
async function getStates(file) {
    try {
        let myObject = await fetch(file);
        if (!myObject.ok) {
            throw new Error('Failed to load states');
        }
        let myText = await myObject.text();
        displayStates(myText);
    } catch (error) {
        console.error('Error loading states:', error);
        alert('Could not load states. Please refresh the page.');
    }
}
//calling the function
getStates('states.html');


//local storage 

//when page loads, check for returning user and load their data
var firstName = getCookie("firstName");

if (firstName !== "") {
    // Automatically load localStorage data
    var email = localStorage.getItem("email");
    if (email) document.getElementById("email").value = email;
    
    var phone = localStorage.getItem("phone");
    if (phone) document.getElementById("phone").value = phone;
    
    var address1 = localStorage.getItem("address1");
    if (address1) document.getElementById("address1").value = address1;
    
    var address2 = localStorage.getItem("address2");
    if (address2) document.getElementById("address2").value = address2;
    
    var city = localStorage.getItem("city");
    if (city) document.getElementById("city").value = city;
    
    var state = localStorage.getItem("state");
    if (state) document.getElementById("state").value = state;
    
    var zip = localStorage.getItem("zip");
    if (zip) document.getElementById("zip").value = zip;
}

//save to localStorage when leaving fields after checking Remember me
document.getElementById("email").addEventListener("blur", function() {
    var rememberMe = document.getElementById("remember-me");
    if (rememberMe.checked) {
        localStorage.setItem("email", this.value);
    }
});

document.getElementById("phone").addEventListener("blur", function() {
    var rememberMe = document.getElementById("remember-me");
    if (rememberMe.checked) {
        localStorage.setItem("phone", this.value);
    }
});

document.getElementById("address1").addEventListener("blur", function() {
    var rememberMe = document.getElementById("remember-me");
    if (rememberMe.checked) {
        localStorage.setItem("address1", this.value);
    }
});

document.getElementById("address2").addEventListener("blur", function() {
    var rememberMe = document.getElementById("remember-me");
    if (rememberMe.checked) {
        localStorage.setItem("address2", this.value);
    }
});

document.getElementById("city").addEventListener("blur", function() {
    var rememberMe = document.getElementById("remember-me");
    if (rememberMe.checked) {
        localStorage.setItem("city", this.value);
    }
});

document.getElementById("state").addEventListener("blur", function() {
    var rememberMe = document.getElementById("remember-me");
    if (rememberMe.checked) {
        localStorage.setItem("state", this.value);
    }
});

document.getElementById("zip").addEventListener("blur", function() {
    var rememberMe = document.getElementById("remember-me");
    if (rememberMe.checked) {
        localStorage.setItem("zip", this.value);
    }
});

// When Remember Me is unchecked, clear localStorage
document.getElementById("remember-me").addEventListener("change", function() {
    if (!this.checked) {
        localStorage.clear();
        console.log("localStorage cleared");
    }
});
