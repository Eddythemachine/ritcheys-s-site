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
    if (
      e.target.classList.contains("link") ||
      e.target.classList.contains("close-nav-bar")
    ) {
      toggleNavBar();
      if (e.target.dataset.tabNo) {
        const tabno = document.querySelector(`#tab-${e.target.dataset.tabNo}`);
        tabno.scrollIntoView({
          behavior: "smooth",
        });
      }
    } else if (e.target.classList.contains("menu")) toggleNavBar();
    else if (e.target.classList.contains("overlay")) {
      toggleNavBar();
    }
  });
};

navEl(nav);
navEl(menu);
// navEl(closeNavBar);
navEl(overlay);
