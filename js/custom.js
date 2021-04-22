var slide = document.getElementById("mySidepanel");
var navRight = document.getElementById("nav-right");
var navLinks = document.getElementById("nav-links");
var closeLink = document.getElementById("close-nav");

var downSlide = document.getElementById("popUpDown");
var downContent = document.getElementById('popup-down');
var downSlideClose = document.getElementById('close-icon');
downSlide.addEventListener("click", showDownSlide);
downSlideClose.addEventListener("click", closeDownSlide);

navRight.addEventListener("click", showLinks);
closeLink.addEventListener("click", closeLinks);


function showDownSlide() {
    downContent.style.height = "100%";
}

function closeDownSlide() {
    downContent.style.height = "0";
}

function showLinks() {
    navLinks.style.width = "100%";
}

function closeLinks() {
    navLinks.style.width = "0";
}

function openNav() {
    slide.style.width = "100%";
}

function closeNav() {
    slide.style.width = "0";
}

function toggleDropdown() {
    document.getElementById("myDropdown").classList.toggle("showtoggle");
}

function toggleDropdownNav() {
    document.getElementById("myIdDropdown").classList.toggle("showtoggle");
}