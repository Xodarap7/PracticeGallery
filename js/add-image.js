const button = document.querySelector(".button-load");
const newImage = document.querySelector("#add-image");

newImage.addEventListener("click", () => {
  button.style.display = "block";
});

button.addEventListener("click", () => {
  alert("Image has been loaded");
});
