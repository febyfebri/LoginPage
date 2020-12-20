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

  accountForm.className += " form-left-slide-out"
  rightText.className += " overlay-text-right-animation-out";
  overlay.className += " open-daftar";
  leftText.className += " overlay-text-left-animation";

  setTimeout(function(){
    accountForm.classList.remove("form-left-slide-in");
    accountForm.style.display = "none";
    accountForm.classList.remove("form-left-slide-out");
  }, 700);

  setTimeout(function(){
    signinForm.style.display = "flex";
    signinForm.classList += " form-right-slide-in";
  }, 200);
}


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

  setTimeout(function(){
    accountForm.style.display = "flex";
    accountForm.classList += " form-left-slide-in";
  },200);
}


openSignUpButton.addEventListener("click", openSignUp, false);
openSignInButton.addEventListener("click", openSignIn, false);