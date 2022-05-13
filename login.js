const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const registerButton = document.getElementById("register-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username == "admin" && password == "admin") {
        location.href = "adminUser/adminUser.html";
    } else if (username == "request" && password == "request") {
        location.href = "requestUser/requestUser.html";
    } else if (username == "worker" && password == "worker") {
        location.href = "workerUser/workerUser.html";
    } else {
        loginForm.username.value='';
        loginForm.password.value='';
        loginErrorMsg.style.opacity = 1;
    }
})

registerButton.addEventListener("click", (e) => {
    e.preventDefault();
    location.href = "createUser/createUser.html";
})