let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle.addEventListener("click", function() {
  mainNav.classList.toggle("active");
});

const registerForm = document.getElementById("inventory-form");
const inventoryButton = document.getElementById("inventory-form-submit");
const orderButton = document.getElementById("order-form-submit");

function random(){

  var imgArray = new Array(6);
  var randomIndex = 0;

  imgArray[0] = "url('happy.jpg')";
  imgArray[1] = "url('HWalton.jpg')";
  imgArray[2] = "url('limits.jpg')";
  imgArray[3] = "url('rice.png')";
  imgArray[4] = "url('WGretzky.jpg')";
  imgArray[5] = "url('you.jpg')";

  randomIndex = Math.floor(Math.random() * 6);
  document.getElementById("a").style.backgroundSize = '50% auto';
  document.getElementById("a").style.backgroundPosition = 'center';
  document.getElementById("a").style.backgroundRepeat = 'no-repeat';
  document.getElementById("a").style.backgroundImage = imgArray[randomIndex];
  setTimeout("random()", 10000);

}