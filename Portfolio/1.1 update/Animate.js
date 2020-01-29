const left = document.querySelector(".left");
const right = document.querySelector(".right");
const box = document.querySelector(".box");

left.addEventListener("mouseenter", () => {
  box.classList.add("hover-left");
});

left.addEventListener("mouseleave", () => {
  box.classList.remove("hover-left");
});

right.addEventListener("mouseenter", () => {
  box.classList.add("hover-right");
});

right.addEventListener("mouseleave", () => {
  box.classList.remove("hover-right");
});
