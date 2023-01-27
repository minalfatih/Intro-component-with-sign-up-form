let firstName = document.querySelector(".username");
let userInput = document.querySelector("[name='username']");
let lastusername = document.querySelector(".lastusername");
let lastName = document.querySelector("[name='lastName']");
let email = document.querySelector(".email");
let emailInput = document.querySelector("[name='email']");
let password = document.querySelector(".password");
let passwordInput = document.querySelector("[name='password']");
let myform = document.querySelector("form");

console.log(userInput);
document.forms[0].onsubmit = function (e) {
  let userfirst = false;
  let userlast = false;
  let useremail = false;
  let userpassword = false;

  console.log(userInput.value);
  console.log(userInput.value.length);

  if (userInput.value !== "" && userInput.value.length <= 10) {
    console.log("valid first");
    userfirst = true;
  } else if (userfirst === false) {
    let errorText = document.createElement("div");
    errorText.textContent = "First Name cannot be empty";
    errorText.style.cssText =
      "font-size: 11px; margin-bottom: 20px; text-align: right; color: var(--Red);";
    firstName.appendChild(errorText);
    userInput.setAttribute("placeholder", " ");
    userInput.style.cssText =
      "background-image: url(./images/icon-error.svg); background-repeat: no-repeat; background-position: 95%; background-size: 20px; border: 1px solid var(--Red); margin-bottom: 5px;";
    e.preventDefault();
  }

  if (lastName.value !== "" && lastName.value.length <= 10) {
    console.log("valid last");
    userlast = true;
  } else if (userlast === false) {
    let errorText = document.createElement("div");
    errorText.textContent = "Last Name cannot be empty";
    errorText.style.cssText =
      "font-size: 11px; margin-bottom: 20px; text-align: right; color: var(--Red);";
    lastusername.appendChild(errorText);
    lastName.setAttribute("placeholder", " ");
    lastName.style.cssText =
      "background-image: url(./images/icon-error.svg); background-repeat: no-repeat; background-position: 95%; background-size: 20px; border: 1px solid var(--Red); margin-bottom: 5px;";
    e.preventDefault();
  }

  if (emailInput.value !== "") {
    console.log("valid email");
    useremail = true;
  } else if (useremail === false) {
    let errorText = document.createElement("div");
    errorText.textContent = "Looks like that is not an email";
    errorText.style.cssText =
      "font-size: 11px; margin-bottom: 20px; text-align: right; color: var(--Red);";
    email.appendChild(errorText);
    emailInput.setAttribute("placeholder", " ");
    emailInput.style.cssText =
      "background-image: url(./images/icon-error.svg); background-repeat: no-repeat; background-position: 95%; background-size: 20px; border: 1px solid var(--Red); margin-bottom: 5px;";
    e.preventDefault();
  }

  if (passwordInput.value !== "") {
    console.log("valid password");
    userpassword = true;
  } else if (userpassword === false) {
    let errorText = document.createElement("div");
    errorText.textContent = "password cannot be empty";
    errorText.style.cssText =
      "font-size: 11px; margin-bottom: 20px; text-align: right; color: var(--Red);";
    password.appendChild(errorText);
    passwordInput.setAttribute("placeholder", " ");
    passwordInput.style.cssText =
      "background-image: url(./images/icon-error.svg); background-repeat: no-repeat; background-position: 95%; background-size: 20px; border: 1px solid var(--Red);";
    e.preventDefault();
  }
};
