/* check if passwords match */
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const message = document.querySelector("#form-message");

confirmPassword.addEventListener("focusout", checkSame);

function checkSame() {
    if (password.value !== confirmPassword.value) {
        message.textContent = "❗Passwords DO NOT MATCH!";
        message.style.visibility = "show";
        confirmPassword.style.backgroundColor = "#fff0f3";
        password.style.backgroundColor = "#fff0f3";
        confirmPassword.value = "";
        password.value = "";
        password.focus();
    } else {
        message.style.display = "none";
        password.style.backgroundColor = "#7fffd4";
        password.style.color = "#000";
        confirmPassword.style.backgroundColor = "#7fffd4";
        confirmPassword.style.color = "#000";
    }
}

/* rating range */
const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("rating");

range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}