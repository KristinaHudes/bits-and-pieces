"use strict";

const menuOpen = document.querySelector(".fa-bars");
const menuClose = document.querySelector(".fa-xmark");
const container = document.querySelector(".container");
const header = document.querySelector(".header");
const nav = document.querySelector(".nav");

const openMenu = () => {
  container.classList.add("container--transform");
  header.classList.add("header--transform");
  nav.classList.add("nav--transform");
  document.body.style.overflowY = "hidden";
};

const closeMenu = () => {
  container.classList.remove("container--transform");
  header.classList.remove("header--transform");
  nav.classList.remove("nav--transform");
  document.body.style.overflowY = "visible";
};

menuOpen.addEventListener("click", openMenu);
menuClose.addEventListener("click", closeMenu);
