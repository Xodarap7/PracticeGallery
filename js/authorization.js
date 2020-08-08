const red = document.querySelector("#registration-red");
const green = document.querySelector("#login-green");
const redClass = document.querySelector("#registration-red");
const greenClass = document.querySelector("#login-green");

red.addEventListener("click", () => {
  red.classList.add("red-animation");
  setTimeout(registration, 600);
  setTimeout(deleteRed, 700);
});

green.addEventListener("click", () => {
  green.classList.add("green-animation");
  setTimeout(authorization, 600);
  setTimeout(deleteGreen, 700);
});

function registration() {
  greenClass.style.display = "flex";
  redClass.style.display = "none";
}

function authorization() {
  greenClass.style.display = "none";
  redClass.style.display = "flex";
}

function deleteRed() {
  red.classList.remove("red-animation");
}
function deleteGreen() {
  green.classList.remove("green-animation");
}
