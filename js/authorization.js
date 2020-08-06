const red = document.querySelector(".red");
const green = document.querySelector(".green");

red.addEventListener("click", registration);
green.addEventListener("click", authorization);

function registration() {
  red.style.display = "none";
  green.style.display = "flex";
}

function authorization() {
  green.style.display = "none";
  red.style.display = "flex";
}
