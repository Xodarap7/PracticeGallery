const photos = document.querySelectorAll(".galery-container img");
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
photos.forEach((photo) => {
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
});
next.addEventListener("click", nextImage);
previous.addEventListener("click", previousImage);

function previousImage() {
  for (let i = 0; i < photos.length; i++) {
    if (modalImg.src === photos[i].src) {
      nextImageNew = photos[i].previousElementSibling;
    }
  }

  if (nextImageNew === null) {
    modalImg.src = photos[photos.length - 1].src;
  } else {
    modalImg.src = nextImageNew.src;
  }
}

let nextImageNew;
function nextImage() {
  for (let i = 0; i < photos.length; i++) {
    if (modalImg.src === photos[i].src) {
      nextImageNew = photos[i].nextElementSibling;
    }
  }

  if (nextImageNew === null) {
    modalImg.src = photos[0].src;
  } else {
    modalImg.src = nextImageNew.src;
  }
}
