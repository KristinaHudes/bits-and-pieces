"use strict";

const container = document.querySelector(".container");

container.addEventListener("mouseover", (e) => {
  const target = e.target;
  target.parentElement.classList.add("active");
});

container.addEventListener("mouseout", (e) => {
  const target = e.target;
  target.parentElement.classList.remove("active");
});
