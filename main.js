//Função para o header quando a pagina for scrolada
window.onscroll = function () {
  scrollHeader();
};

var header = document.querySelector(".header");
var headerTitle = document.querySelector(".header__title");
var sticky = header.offsetTop;
var menuItems = document.getElementsByClassName("header__menu-item");

var slideIndex = 0;

function scrollHeader() {
  if (window.scrollY > sticky) {
    header.classList.add("header--background-white");
    headerTitle.classList.add("header--title-hidden");

    for (var i = 0; i < menuItems.length; i++) {
      menuItems[i].style.color = "#010101";
    }
  } else {
    header.classList.remove("header--background-white");
    headerTitle.classList.remove("header--title-hidden");

    for (var i = 0; i < menuItems.length; i++) {
      menuItems[i].style.color = "white";
    }
  }
}

//Função do slider do banner
carousel();
function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {
    slideIndex = 1;
  }
  x[slideIndex - 1].style.display = "block";
  setTimeout(carousel, 5000);
}

//Funções do Image Viewer
var currentImageIndex = 0;
var images = document.querySelectorAll(".about__images__container img");
var imageViewer = document.getElementById("image-viewer");
var fullImage = document.getElementById("full-image");
var moreImages = document.querySelector(".about__images__container-hidden");

function openImageViewer(clickedImage) {
  currentImageIndex = Array.from(images).indexOf(clickedImage);
  showImage();
}
function showImage() {
  fullImage.src = images[currentImageIndex].src;
  imageViewer.style.display = "block";
}
function closeImageViewer() {
  imageViewer.style.display = "none";
}
function prevImage() {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  showImage();
}
function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  showImage();
}
function openMoreImages() {
  if (moreImages.className == "about__images__container-hidden open--images") {
    moreImages.classList.remove("open--images");
  } else {
    moreImages.classList.add("open--images");
  }
}

// Função do icon de acordo com o scroll
window.addEventListener("scroll", function () {
  var icon = document.querySelector(".icon");
  var contactSection = document.getElementById("contact");
  var offset = contactSection.offsetTop;

  if (window.pageYOffset > offset) {
    icon.classList.add("hidden");
  } else {
    icon.classList.remove("hidden");
  }
});

// Modal de imagens
var modal = document.getElementById("myModal");
var modalContent = document.querySelector(".modal-content");
var btns = document.querySelectorAll(".events__images__container-item");
var span = document.getElementsByClassName("close-modal")[0];

function openModal(images) {
  modalContent.innerHTML = "";

  images.forEach(function (imageUrl) {
    var img = document.createElement("img");
    img.src = imageUrl;
    modalContent.appendChild(img);
  });

  modal.style.display = "block";
}

// Event listeners for each item
btns.forEach(function (btn) {
  btn.onclick = function () {
    if (btn.id === "event-1") {
      openModal([
        "./public/formatura.jpg",
        "./public/formatura.jpg",
        "./public/formatura.jpg",
        "./public/formatura.jpg",
        "./public/formatura.jpg",
        "./public/formatura.jpg",
        "./public/formatura.jpg",
        "./public/formatura.jpg",
      ]);
    } else if (btn.id === "event-2") {
      openModal([
        "./public/fachada.jpg",
        "./public/fachada.jpg",
        "./public/fachada.jpg",
        "./public/fachada.jpg",
        "./public/fachada.jpg",
        "./public/fachada.jpg",
        "./public/fachada.jpg",
        "./public/fachada.jpg",
      ]);
    } else if (btn.id === "event-3") {
      openModal([
        "./public/interior.jpeg",
        "./public/interior.jpeg",
        "./public/interior.jpeg",
        "./public/interior.jpeg",
        "./public/interior.jpeg",
        "./public/interior.jpeg",
        "./public/interior.jpeg",
        "./public/interior.jpeg",
      ]);
    } else if (btn.id === "event-4") {
      openModal([
        "./public/fachada2.jpg",
        "./public/fachada2.jpg",
        "./public/fachada2.jpg",
        "./public/fachada2.jpg",
        "./public/fachada2.jpg",
        "./public/fachada2.jpg",
        "./public/fachada2.jpg",
        "./public/fachada2.jpg",
      ]);
    }
  };
});

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
