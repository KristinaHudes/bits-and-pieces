"use strict";

const inputLabels = document.querySelectorAll("label");
const formBtn = document.querySelector(".btn");
const formLink = document.querySelector(".link");

formBtn.addEventListener("click", (e) => e.preventDefault());
formLink.addEventListener("click", (e) => e.preventDefault());

inputLabels.forEach((label) => {
  label.innerHTML = label.textContent
    .split("")
    .map(
      (value, index) =>
        `<span style="transition-delay: ${index * 50}ms;">${value}</span>`
    )
    .join("");
});
