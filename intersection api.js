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

// const opt2 = {
//   // root: document.querySelector(".home"),
//   root: null,
//   rootMargin: "0px",
//   threshold: 0,
// };

// const call2 = (entries, observer) => {
//   entries.forEach((mov) => {
//     if (!mov.isIntersecting) {
//       flyin.forEach((mov) => {

//       });
//     } else {
//       flyin.forEach((mov) => {

//       });
//     }
//   });
// };

// const hideObjs = new IntersectionObserver(call2, opt2);

// page.forEach((mov) => {
//   hideObjs.observe(mov);
// });
