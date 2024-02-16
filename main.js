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
var ContainerImageViewer = document.querySelector(".container");
var fullImage = document.getElementById("full-image");
var moreImages = document.querySelector(".about__images__container-hidden");

var imageTexts = [
  "Com área construída de 2.451,05m², composto de, 1.950m² de salão de festa, pé-direito de 5m.",
  "",
  "",
  "",
  "2 sanitários femininos e 2 masculinos um com 114,67m² e outro com 67,50m² de área construída.",
  "",
  "",
  "2 cozinhas uma com 74,10 m² e outra 67,50m² de área construída.",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "Palco de 112,15m² e camarim de 46,85m², incluso área de estacionamento, contendo todas as instalações hidráulicas e elétricas, tais como lâmpadas, 42 aparelhos de ar condicionados, torneiras, válvulas de descarga, cerâmicas, vidro, azulejos, portas de vidro duplo e esquadrias de PVC, etc.,",
  "",
  "",
  "",
  "",
  "",
];

function openImageViewer(clickedImage) {
  currentImageIndex = Array.from(images).indexOf(clickedImage);
  showImage();
}
function showImage() {
  fullImage.src = images[currentImageIndex].src;
  document.querySelector(".image__text").textContent =
    imageTexts[currentImageIndex];
  imageViewer.style.display = "block";
}
function closeImageViewer() {
  imageViewer.style.display = "none";
  pauseVideo();
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

var contentMappings = {
  "event-1": [
    { type: "image", src: "./public/formatura.jpg" },
    { type: "image", src: "./public/formatura.jpg" },
    { type: "image", src: "./public/formatura.jpg" },
    { type: "image", src: "./public/formatura.jpg" },
    { type: "image", src: "./public/formatura.jpg" },
    { type: "image", src: "./public/formatura.jpg" },
    { type: "image", src: "./public/formatura.jpg" },
  ],
  "event-2": [
    { type: "image", src: "./public/evento1/show.jpeg" },
    { type: "image", src: "./public/evento1/show2.jpeg" },
    { type: "image", src: "./public/evento1/show3.jpeg" },
    { type: "image", src: "./public/evento1/show4.jpeg" },
    { type: "image", src: "./public/evento1/show5.jpeg" },
    { type: "image", src: "./public/evento1/show6.jpeg" },
    { type: "video", src: "./public/evento1/videoShow.mp4" },
    { type: "video", src: "./public/evento1/videoShow2.mp4" },
  ],
  "event-3": [
    { type: "image", src: "./public/evento2/casamento.jpeg" },
    { type: "image", src: "./public/evento2/casamento2.jpeg" },
    { type: "image", src: "./public/evento2/casamento3.jpeg" },
    { type: "image", src: "./public/evento2/casamento4.jpeg" },
    { type: "image", src: "./public/evento2/casamento5.jpeg" },
    { type: "image", src: "./public/evento2/casamento6.jpeg" },
    { type: "video", src: "./public/evento2/casamentoVideo.mp4" },
    { type: "video", src: "./public/evento2/casamentoVideo3.mp4" },
  ],
  "event-4": [
    { type: "image", src: "./public/evento3/confra.jpeg" },
    { type: "image", src: "./public/evento3/confra2.jpeg" },
    { type: "video", src: "./public/evento3/confraVideo.mp4" },
    { type: "video", src: "./public/evento3/confraVideo2.mp4" },
  ],
};

var openedVideos = [];
function openModal(content) {
  modalContent.innerHTML = "";

  content.forEach(function (item) {
    if (item.type === "image") {
      var img = document.createElement("img");
      img.src = item.src;
      modalContent.appendChild(img);
    } else if (item.type === "video") {
      var video = document.createElement("video");
      video.id = "modalVideo" + openedVideos.length;
      openedVideos.push(video);

      video.style.maxWidth = "100%";
      video.style.maxHeight = "400px";
      video.controls = true;

      var source = document.createElement("source");
      source.src = item.src;
      source.type = "video/mp4";

      video.appendChild(source);
      modalContent.appendChild(video);
    }
  });

  modal.style.display = "block";
}

btns.forEach(function (btn) {
  btn.onclick = function () {
    var buttonId = btn.id;
    if (contentMappings.hasOwnProperty(buttonId)) {
      openModal(contentMappings[buttonId]);
    }
  };
});

span.onclick = function () {
  modal.style.display = "none";
  pauseVideo();
};

window.onclick = function (event) {
  if (event.target == modal || event.target == ContainerImageViewer) {
    modal.style.display = "none";
    closeImageViewer();
    pauseVideo();
  }
};

//pausar video
function pauseVideo() {
  openedVideos.forEach(function (videoElement) {
    if (videoElement && !videoElement.paused && !videoElement.ended) {
      videoElement.pause();
    }
  });
}
