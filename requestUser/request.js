let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle.addEventListener("click", function() {
  mainNav.classList.toggle("active");
});

const registerForm = document.getElementById("inventory-form");
const requestButton = document.getElementById("request-form-submit");

requestButton.addEventListener("click", (e) => {
    e.preventDefault();
    
    let checkedboxes = document.querySelectorAll('input[name="requests"]:checked');
    let checkboxes = document.querySelectorAll('input[name="requests"]');
    if (checkedboxes.length == 0){
      alert("You must pick at least one item to submit a request!")
    } else {
      for (var checkbox of checkedboxes){
        checkbox.checked = false;
      }
      alert("Your request has been added to your cart.")
    }

})