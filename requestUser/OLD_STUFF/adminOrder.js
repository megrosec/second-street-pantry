let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle.addEventListener("click", function() {
  mainNav.classList.toggle("active");
});

const registerForm = document.getElementById("inventory-form");
const orderButton = document.getElementById("order-form-submit");

orderButton.addEventListener("click", (e) => {
    e.preventDefault();
    
    let checkedboxes = document.querySelectorAll('input[name="requests"]:checked');
    let checkboxes = document.querySelectorAll('input[name="requests"]');
    if (checkboxes.length != checkedboxes.length){
      alert("You must pick all items in the order!")
    } else {
      alert("The order has been picked.")
    }

})

