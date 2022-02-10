let btn = document.querySelector(".fa-bars");
let links = document.querySelector(".links");

btn.addEventListener("click", method1);
btn.addEventListener("click", method2);
function method2() {
  if (btn.classList.contains("fa-bars")) {
    btn.classList.replace("fa-bars", "fa-times");
    btn.classList.replace("fad", "fas");
  } else {
    btn.classList.replace("fa-times", "fa-bars");
    btn.classList.replace("fas", "fad");
  }
}
function method1() {
  if (links.classList.contains("inactive")) {
    links.classList.replace("inactive", "active");
  } else {
    links.classList.replace("active", "inactive");
  }
}
let play = document.querySelector(".video-play");
let play2 = document.querySelector(".fa-play");
let exit = document.querySelector(".video-exit");
let video = document.querySelector(".pop-up");
play.onclick = function () {
  video.classList.remove("disappear");
};
play2.onclick = function () {
  video.classList.remove("disappear");
};
exit.onclick = function () {
  video.classList.add("disappear");
};
let servicebutt = document.getElementById("service-butt");
let service = document.querySelector(".service");
let landing = document.querySelector(".landing");

servicebutt.addEventListener("click", serfun1);
servicebutt.addEventListener("click", serfun2);
function serfun1() {
  service.classList.remove("disappear");
}
function serfun2() {
  landing.classList.add("service-back");
}

let headlink = document.querySelector(".header-link");

headlink.addEventListener("click", method1);
headlink.addEventListener("click", method2);
