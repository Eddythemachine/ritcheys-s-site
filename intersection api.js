const flyin = document.querySelectorAll(".flyin");
const page = document.querySelectorAll(".pagein");

const optionsOb = {
  // root: document.querySelector(".home"),
  root: null,
  rootMargin: "0px",
  threshold: 0.2,
};

let callOb = (entries, observer) => {
  entries.forEach((mov) => {
    if (mov.isIntersecting) {
      mov.target.style.opacity = "1";
      mov.target.classList.add("tst");
    }
    // observer.unobserve(mov.target);
  });
};

const observer = new IntersectionObserver(callOb, optionsOb);

flyin.forEach((mov) => {
  mov.style.opacity = "0";
  observer.observe(mov);
});

// NAVBAR STICKY

const navbar = document.querySelector(".navbar");
const sectionOne = document.querySelector(".home-main");

const navOp = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
};

const callNav = (entries, observer) => {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    navbar.classList.add("sticky-nav");
  } else {
    navbar.classList.remove("sticky-nav");
  }
};

const observeNav = new IntersectionObserver(callNav, navOp);

observeNav.observe(sectionOne);

document.querySelector(".about-me").addEventListener("click", () => {
  document.querySelector("#tab-2").scrollIntoView({
    behavior: "smooth",
  });
});
