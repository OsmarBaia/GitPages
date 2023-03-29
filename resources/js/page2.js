const log = document.getElementById("log");

function logSubmit() {
  //Get Values
  let userName = window.localStorage.getItem("nome");
  log.textContent = `Saved Name: ${userName}`;
}

logSubmit();
