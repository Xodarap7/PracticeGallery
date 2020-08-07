// Фильтр картинок

const categoriesMenu = document.querySelectorAll("#category-menu");
let images = document.querySelectorAll("#photo");
const imagesArray = Array.from(images);
const galeryContainer = document.querySelector(".galery-container");
let filteredImages;

document.addEventListener("load", () => {});

categoriesMenu.forEach((categoryMenu) => {
  categoryMenu.addEventListener("click", () => {
    addAll();
    const filter = categoryMenu.getAttribute("class");
    deleteAll();
    filterImages(filter);
  });
});

function filterImages(filter) {
  filteredImages = imagesArray.filter((image) =>
    image.classList.contains(filter)
  );
  filteredImages.forEach((filteredImage) => {
    galeryContainer.appendChild(filteredImage);
    images = filteredImages;
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

// модальное окно

const modal = document.querySelector(".modal");
const modalImg = document.querySelector(".modal img");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".close-window");
const nextPrevious = document.querySelector(".next-previous");
const previous = document.querySelector(".previous");
const next = document.querySelector(".next");

function closePhoto() {
  modal.style.display = "none";
  overlay.style.display = "none";

  closeBtn.style.display = "none";
  nextPrevious.style.display = "none";
}

function openPhoto() {
  modal.style.display = "block";
  closeBtn.style.display = "block";
  overlay.style.display = "block";
  nextPrevious.style.display = "block";
}

let route;
images.forEach((photo) => {
  if (window.innerWidth < 1330) {
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

//bg color menu
const nav = document.querySelector(".menu");
let y;

window.addEventListener("scroll", () => {
  y = window.scrollY;

  if (y > 200) {
    nav.style.backgroundColor = "#000";
    // nav.style.height = "60px";
  }
  if (y < 200) {
    nav.style.backgroundColor = "transparent";
  }
});
