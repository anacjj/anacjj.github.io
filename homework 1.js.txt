/*
Author: Ana Jara
File: homework_1.js
Date created: 9/15/2025
Date last edited: 9/26/2025
Description: MIS 3371 Homework 1 - Allowing JavaScript functions for the patient form.
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