"use strict";

const questionBlocks = document.querySelectorAll(".question-block");

questionBlocks.forEach((block) =>
  block.addEventListener("click", () => block.classList.toggle("active"))
);
