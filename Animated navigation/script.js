"use strict";

const btn = document.querySelector(".btn");
const container = document.querySelector(".container");

const toggleActive = () => {
  container.classList.toggle("active");
};

btn.addEventListener("click", toggleActive);
