const categoriesMenu = document.querySelectorAll("#category-menu");
const images = document.querySelectorAll("#photo");

categoriesMenu.forEach((categoryMenu) => {
  categoryMenu.addEventListener("click", () => {
    categoryName = categoryMenu.getAttribute("class");
    // images.forEach((image) => {
    // categoryImage = image.getAttribute("class");
    // const filter = images.filter(categoryName == categoryImage);
    console.log(images);
    // });
  });
});
