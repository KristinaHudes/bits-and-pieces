"use strict";

const cards = document.querySelectorAll(".card");

const removeActive = () => {
  cards.forEach((card) => card.classList.remove("card--active"));
};

cards.forEach((card) =>
  card.addEventListener("click", () => {
    removeActive();
    card.classList.add("card--active");
  })
);
