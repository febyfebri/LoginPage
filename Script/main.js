var overlay = document.getElementById("overlay");
var logo = document.getElementById("logo");

var openSignUpButton = document.getElementById("slide-left-button");
var openSignInButton = document.getElementById("slide-right-button");

var leftText = document.getElementById("login");
var rightText = document.getElementById("daftar");

var accountForm = document.getElementById("login-info")
var signinForm = document.getElementById("daftar-info");

openSignUp = () =>{
    
  leftText.classList.remove("overlay-text-left-animation-out");
  overlay.classList.remove("open-login");
  rightText.classList.remove("overlay-text-right-animation");
  // Add classes for animations
  accountForm.className += " form-left-slide-out"
  rightText.className += " overlay-text-right-animation-out";
  overlay.className += " open-daftar";
  leftText.className += " overlay-text-left-animation";
  // hide the sign up form once it is out of view
  setTimeout(function(){
    accountForm.classList.remove("form-left-slide-in");
    accountForm.style.display = "none";
    accountForm.classList.remove("form-left-slide-out");
  }, 700);
  // display the sign in form once the overlay begins moving right
  setTimeout(function(){
    signinForm.style.display = "flex";
    signinForm.classList += " form-right-slide-in";
  }, 200);
}

// Open the Sign In page
openSignIn = () =>{
  leftText.classList.remove("overlay-text-left-animation");
  overlay.classList.remove("open-daftar");
  rightText.classList.remove("overlay-text-right-animation-out");
  signinForm.classList += " form-right-slide-out";
  leftText.className += " overlay-text-left-animation-out";
  overlay.className += " open-login";
  rightText.className += " overlay-text-right-animation";
  setTimeout(function(){
    signinForm.classList.remove("form-right-slide-in")
    signinForm.style.display = "none";
    signinForm.classList.remove("form-right-slide-out")
  },700);
  // display the sign up form once the overlay begins moving left
  setTimeout(function(){
    accountForm.style.display = "flex";
    accountForm.classList += " form-left-slide-in";
  },200);
}

// When a 'switch' button is pressed, switch page
openSignUpButton.addEventListener("click", openSignUp, false);
openSignInButton.addEventListener("click", openSignIn, false);