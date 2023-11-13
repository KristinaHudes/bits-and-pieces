"use strict";

const imgs = document.querySelectorAll(".img");

const showImgs = () => {
  imgs.forEach((img) => {
    const showLine = (window.innerHeight / 5) * 4;
    const imgTop = img.getBoundingClientRect().top;

    if (imgTop <= showLine) {
      img.classList.add("active");
    } else {
      img.classList.remove("active");
    }
  });
};

showImgs();

document.addEventListener("scroll", showImgs);
