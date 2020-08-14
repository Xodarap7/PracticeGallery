const btnOpenRegister = document.querySelector("#open-register");
const btnOpenLogin = document.querySelector("#open-login");
const redClass = document.querySelector(".red-side-container");
const greenClass = document.querySelector(".green-side-container");

btnOpenRegister.addEventListener("click", (e) => {
  e.preventDefault();
  redClass.classList.add("red-animation");
  setTimeout(registration, 600);
  setTimeout(deleteRed, 700);
});

btnOpenLogin.addEventListener("click", (e) => {
  e.preventDefault();
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
