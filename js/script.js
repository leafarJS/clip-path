"use strict";
const d = document;
const _images = d.querySelectorAll("img");
console.log(_images);
_images.forEach((img) => {
  img.addEventListener("mouseenter", () => {
    img.style.filter = "blur(4px)";
  });
  img.addEventListener("mouseleave", () => {
    img.style.filter = "grayscale(0%)";
  });
});
