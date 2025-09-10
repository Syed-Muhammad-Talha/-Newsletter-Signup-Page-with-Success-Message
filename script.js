const form = document.getElementById("signup-form");
const emailInput = document.getElementById("email");
const errorMsg = document.getElementById("error-msg");

const formCard = document.getElementById("form-card");
const successCard = document.getElementById("success-card");
const userEmail = document.getElementById("user-email");
const dismissBtn = document.getElementById("dismiss-btn");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = emailInput.value.trim();

    if(!email){
        showError("Email field cannot be empty");
        return;
    }

    if(!isValidEmail(email)) {
        showError("Valid email required");
        return;
    }

    userEmail.textContent = email;
    formCard.classList.add("hidden");
    successCard.classList.remove("hidden");
    setTimeout(() => successCard.classList.add("show"), 50);
});

dismissBtn.addEventListener("click", () => {
    successCard.classList.remove("show");
    setTimeout(() => {
        successCard.classList.add("hidden");
        formCard.classList.remove("hidden");
        emailInput.value = "";
    }, 500);
});

function showError(message){
    errorMsg.textContent = message;
    emailInput.style.borderColor = "#ff4d67";
}

function  isValidEmail(email){
    const regex = /^[^\s@]+@[^\s@]+\.[^\@]+$/;
    return regex.test(email);
}