// header title start

const spans = document.querySelectorAll(".content-title span");

spans.forEach((span, index) => {
  span.addEventListener("click", (e) => {
    e.target.classList.add("active");
  });
  span.addEventListener("animationend", (e) => {
    e.target.classList.remove("active");
  });

  setTimeout(() => {
    span.classList.add("active");
  }, 350 * (index + 1));
});
// header title end
// hidden menu start
let main = document.querySelector(".main");
let header_button = document.querySelector(".header-menu-button");
let nav_list = document.querySelector(".nav-menu-hidden");
let display = document.querySelector("body");

// hidden menu end
// show content start
let contents = document.querySelectorAll(".content");
let buttons = document.querySelectorAll("[data-m]");
let articles = document.querySelectorAll(".article");

buttons.forEach(function (item) {
  item.addEventListener("click", function () {
    // удаляем все button-active
    buttons.forEach((item) => {
      item.classList.remove("page-active");
    });
    // добавляем текущему button-active
    this.classList.add("page-active");
    // удаляем весь content
    contents.forEach(function (item) {
      item.classList.add("content-hidden");
      item.classList.remove("content");
      spans.forEach((item) => {
        item.classList.remove("active");
      });
    });
    // показываем нужный контент
    let d = this.dataset.m;
    let content_id = `#${d}`;
    document.querySelector("#" + d).classList.remove("content-hidden");
    document.querySelector("#" + d).classList.add("content");
    if (document.querySelector("#" + d).classList.contains("content")) {
      let this_span = `${content_id} .content-title span`;
      document.querySelectorAll(this_span).forEach((item, index) => {
        setTimeout(() => {
          item.classList.add("active");
        }, 350 * (index + 1));
      });
    }
    if (document.querySelector("#content-3").classList.contains("content")) {
      document.querySelector(".sections-1").style.minHeight = "436px";
    } else if (
      document.querySelector("#content-3").classList.contains("content-hidden")
    ) {
      document.querySelector(".sections-1").style.minHeight = "205px";
    }

    articles.forEach((item) => {
      item.classList.add("article-hidden");
    });
    let article_id = `${d}${d}${d}`;
    document.querySelector("#" + article_id).classList.remove("article-hidden");
  });
});
//modal start
function openModal() {
  document.getElementById("myModal").style.display = "flex";
  if ((document.getElementById("myModal").style.display = "flex")) {
    document.querySelector("body").style.overflowY = "hidden";
  }
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
  if ((document.getElementById("myModal").style.display = "none")) {
    document.querySelector("body").style.overflowY = "auto";
  }
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  let article_img = document.querySelector(".mySlides img");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  captionText.innerText = article_img.forEach((item, index) => {
    item.alt;
  });
} // modal end
