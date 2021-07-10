var burger = document.getElementById("burger");
var close_btn = document.getElementById("close_btn");
var pages = document.getElementById("pages");
var navOpen = false;

function ShowNav() {
  burger.style.display = "none";
  close_btn.style.display = "block";
  pages.style.display = "flex";
}

function HideNav() {
  burger.style.display = "block";
  close_btn.style.display = "none";
  pages.style.display = "none";
}
burger.addEventListener("click", ShowNav);
close_btn.addEventListener("click", HideNav);