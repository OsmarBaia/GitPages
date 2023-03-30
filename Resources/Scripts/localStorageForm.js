const form = document.getElementById("form");
const log = document.getElementById("log");

function logSubmit(event) {
  event.preventDefault();
  //Get Values
  let userName = form.querySelector('input[name="name"]').value;
  log.textContent = `Form Submitted! Name: ${userName}`;

  //Save Values to LocalStorage
  window.localStorage.setItem("nome", userName);
}

form.addEventListener("submit", logSubmit);
