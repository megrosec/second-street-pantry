const registerForm = document.getElementById("register-form");
const createButton = document.getElementById("create-form-submit");
const cancelButton = document.getElementById("cancel-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

createButton.addEventListener("click", (e) => {
    e.preventDefault();
    registerForm.username.value='';
    registerForm.password.value='';
    registerForm.first_name.value='';
    registerForm.last_name.value='';
    registerForm.address.value='';
    registerForm.phone_number.value='';
    registerForm.family_size.value='';
    registerForm.income.value='';
        alert("A new user has been added to the system");
})

cancelButton.addEventListener("click", (e) => {
    e.preventDefault();
    location.href = "../index.html";
})