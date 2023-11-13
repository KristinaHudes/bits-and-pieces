"use strict";

const container = document.querySelector(".container");
const input = document.querySelector(".input");
const btn = document.querySelector(".btn");

const toggleSearch = () => {
  container.classList.toggle("container--active");
  input.focus();
};

btn.addEventListener("click", toggleSearch);
