const categoriesMenu = document.querySelectorAll("#category-menu");
const images = document.querySelectorAll("#photo");
const imagesArray = Array.from(images);
const galeryContainer = document.querySelector(".galery-container");

categoriesMenu.forEach((categoryMenu) => {
  categoryMenu.addEventListener("click", () => {
    addAll();
    const filter = categoryMenu.getAttribute("class");
    deleteAll();
    filterImages(filter);
  });
});

function filterImages(filter) {
  const filteredImages = imagesArray.filter((image) =>
    image.classList.contains(filter)
  );
  filteredImages.forEach((filteredImage) => {
    galeryContainer.appendChild(filteredImage);
  });
}

function addAll() {
  images.forEach((image) => {
    galeryContainer.appendChild(image);
  });
}

function deleteAll() {
  images.forEach((image) => {
    galeryContainer.removeChild(image);
  });
}
