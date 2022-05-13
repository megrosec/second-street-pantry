let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle.addEventListener("click", function() {
  mainNav.classList.toggle("active");
});

const cancelButton = document.getElementById("endSearch-form-submit");
const searchForm = document.getElementById("search-form");
const searchButton = document.getElementById("search-form-submit");

searchButton.addEventListener("click", (e) => {
    e.preventDefault();

    const searchItem = searchForm.searchItem.value
    
    if (searchItem == "Eggs" || searchItem == "Milk") {
      alert("We have that item, and have added it to your cart!");
  } else {
      alert("Alas we do not have that item!");
  }
  searchForm.searchItem.value = "";
    /*alert("Items will be prepared for you to pick up.")
    location.href = "requestUser.html";*/
})

cancelButton.addEventListener("click", (e) => {
  e.preventDefault();
  location.href = "requestUser.html";
})