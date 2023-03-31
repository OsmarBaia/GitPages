// Button
const button = document.getElementById("mat");
const log = document.getElementById("log");

console.log(`Button: ${button.innerText}`);

function logButton(event) {
  console.log("Called");
  event.preventDefault();
  let matName = button.innerText;
  log.textContent = `Nome da matéria: ${matName}`;

  window.localStorage.setItem("selectedSubject", matName);
}

button.addEventListener("click", logButton);
