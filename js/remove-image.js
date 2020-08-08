const icons = document.querySelectorAll(".material-icons");

icons.forEach((icon) => {
  icon.addEventListener("click", () => {
    confirm("Are you sure?");
  });
});
