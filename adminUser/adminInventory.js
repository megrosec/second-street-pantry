let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle.addEventListener("click", function() {
  mainNav.classList.toggle("active");
});

const registerForm = document.getElementById("inventory-form");
const inventoryButton = document.getElementById("inventory-form-submit");

inventoryButton.addEventListener("click", (e) => {
  e.preventDefault();

   alert("Inventory has been updated!")
 
})