// Selecting items

// Navbar
const menu = document.querySelector(".menu");
const overlay = document.querySelector(".overlay");
const nav = document.querySelector(".nav");
const closeNavBar = document.querySelector(".close-nav-bar");

// FUNCTIONS

// Togglenavbar
const toggleNavBar = function () {
  nav.classList.toggle("translate");
  overlay.classList.toggle("overlayer");
};

// EVENT LISTENERS

// Nav bar

const navEl = function (event) {
  event.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(e.target.classList);
    console.log(
      e.target.classList.contains("link") ||
        e.target.classList.contains("close-nav-bar")
    );
    if (e.target.classList.contains("link")) {
      toggleNavBar();
    } else if (e.target.classList.contains("close-nav-bar")) {
      closeNavBar();
    } else {
      toggleNavBar();
    }
  });
};

navEl(nav);
navEl(menu);
navEl(closeNavBar);
navEl(overlay);
