// let id = (id) => document.getElementById(id);
// console.log(id);

// let username = document.getElementById("username");
// let email = document.getElementById("email");
// let password = document.getElementById("password");
// let errorMsg = document.getElementsByClassName("error");
// let successIcon = document.getElementsByClassName("success-icon");
// let failureIcon = document.getElementsByClassName("failure-icon");

// console.log(successIcon);

// let form = document.getElementById("form");

// function executeFun(e) {
//   e.preentDefault();
//   errorMsg[2].innerHTML = "You are putting wrong";
// }

// form.addEventListener("submit", executeFun(e));

let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let username = id("username"),
  email = id("email"),
  password = id("password"),
  form = id("form"),
  errorMsg = classes("error"),
  successIcon = classes("success-icon"),
  failureIcon = classes("failure-icon");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  engineHasBeenStart(username, 0, "Username can't blank");
  engineHasBeenStart(email, 1, "E-mail can't blank");
  engineHasBeenStart(password, 2, "Password can't blank");
});

let engineHasBeenStart = (id, arrNum, message) => {
  if (id.value.trim() === "") {
    errorMsg[arrNum].innerHTML = message;
    id.style.border = "2px solid red";
    //icon
    failureIcon[arrNum].style.opacity = "1";
    successIcon[arrNum].style.opacity = "0";
  } else {
    errorMsg[arrNum].innerHTML = "";
    id.style.border = "2px solid green";

    // icons
    failureIcon[arrNum].style.opacity = "0";
    successIcon[arrNum].style.opacity = "1";
  }
};
