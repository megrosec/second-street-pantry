let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle.addEventListener("click", function() {
  mainNav.classList.toggle("active");
});

const registerForm = document.getElementById("inventory-form");
const cartButton = document.getElementById("cart-form-submit");

cartButton.addEventListener("click", (e) => {
    e.preventDefault();
    
    alert("Items will be prepared for you to pick up.")
    location.href = "requestUser.html";
})