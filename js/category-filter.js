const categoriesMenu = document.querySelectorAll("#category-menu");
const images = document.querySelectorAll("#photo");
const imagesArray = Array.from(images);

categoriesMenu.forEach((categoryMenu) => {
  categoryMenu.addEventListener("click", () => {
    const filter = categoryMenu.getAttribute("class");
    filterImages(filter);
  });
});

galeryContainer = document.querySelector(".galery-container");
function filterImages(filter) {
  const filteredImages = imagesArray.filter((image) =>
    image.classList.contains(filter)
  );
  console.log(filteredImages);

  galeryContainer.appendChild(filteredImages);
}
