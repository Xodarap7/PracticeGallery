// const red = document.querySelector("#registration-red");
// const green = document.querySelector("#login-green");
const redClass = document.querySelector(".red");
const greenClass = document.querySelector(".green");

redClass.addEventListener("click", () => {
  redClass.classList.add("red-animation");
  setTimeout(registration, 600);
  setTimeout(deleteRed, 700);
});

greenClass.addEventListener("click", () => {
  greenClass.classList.add("green-animation");
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
  redClass.classList.remove("red-animation");
}
function deleteGreen() {
  greenClass.classList.remove("green-animation");
}
