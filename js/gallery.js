// IMAGE FILTER
const categoriesMenu = document.querySelectorAll("#category-menu");
let images = document.querySelectorAll("#photo");
const imagesArray = Array.from(images);
const galeryContainer = document.querySelector(".galery-container");
let filteredImages;

categoriesMenu.forEach((categoryMenu) => {
  categoryMenu.addEventListener("click", () => {
    const filter = categoryMenu.getAttribute("class");
    filterImages(filter);
  });
});

function filterImages(filter) {
  filteredImages = imagesArray.filter((image) =>
    image.classList.contains(filter)
  );
  if (filteredImages.length === 0) {
    return;
  } else {
    deleteAll();
    filteredImages.forEach((filteredImage) => {
      galeryContainer.appendChild(filteredImage);
    });
    images = filteredImages;
  }
}

function deleteAll() {
  images.forEach((image) => {
    galeryContainer.removeChild(image);
  });
}

// MODAL
const modal = document.querySelector(".modal");
const modalImg = document.querySelector(".modal img");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".close-window");
const previous = document.querySelector(".previous");
const next = document.querySelector(".next");

function closePhoto() {
  modal.style.display = "none";
  overlay.style.display = "none";
}

function openPhoto() {
  modal.style.display = "block";
  overlay.style.display = "block";
}

let route;
images.forEach((photo) => {
  if (window.innerWidth < 500) {
    return;
  } else {
    photo.addEventListener("click", () => {
      openPhoto();
      route = photo.getAttribute("src");
      modalImg.setAttribute("src", route);
      closeBtn.addEventListener("click", () => {
        closePhoto();
      });
      overlay.addEventListener("click", () => {
        closePhoto();
      });
    });
  }
});
next.addEventListener("click", nextImage);
previous.addEventListener("click", previousImage);

function previousImage() {
  for (let i = 0; i < images.length; i++) {
    if (modalImg.src === images[i].src) {
      nextImageNew = images[i].previousElementSibling;
    }
  }

  if (nextImageNew === null) {
    modalImg.src = images[images.length - 1].src;
  } else {
    modalImg.src = nextImageNew.src;
  }
}

let nextImageNew;
function nextImage() {
  for (let i = 0; i < images.length; i++) {
    if (modalImg.src === images[i].src) {
      nextImageNew = images[i].nextElementSibling;
    }
  }

  if (nextImageNew === null) {
    modalImg.src = images[0].src;
  } else {
    modalImg.src = nextImageNew.src;
  }
}

// MENU SCROLL (CHANGE BG COLOR)
const nav = document.querySelector(".menu");
let offsetTop;

window.addEventListener("scroll", () => {
  offsetTop = window.scrollY;
  if (offsetTop > 200) {
    nav.style.backgroundColor = "#000";
  }
  if (offsetTop < 200) {
    nav.style.backgroundColor = "transparent";
  }
});
