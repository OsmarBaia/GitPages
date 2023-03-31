const log = document.getElementById("log");

function loadSubjectData() {
  log.innerHTML = window.localStorage.getItem("selectedSubject");
}

loadSubjectData();
