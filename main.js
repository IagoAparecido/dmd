//Função para o header quando a pagina for scrolada
window.onscroll = function () {
  scrollHeader();
};

var header = document.querySelector(".header");
var headerTitle = document.querySelector(".header__title");
var sticky = header.offsetTop;

var slideIndex = 0;

function scrollHeader() {
  if (window.scrollY > sticky) {
    header.classList.add("header--background-white");
    headerTitle.classList.add("header--title-hidden");
  } else {
    header.classList.remove("header--background-white");
    headerTitle.classList.remove("header--title-hidden");
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

//Função do Image Viewer
var currentImageIndex = 0;
var images = document.querySelectorAll(".about__images__container img");
var imageViewer = document.getElementById("image-viewer");
var fullImage = document.getElementById("full-image");

function openImageViewer(clickedImage) {
  console.log(clickedImage);
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
