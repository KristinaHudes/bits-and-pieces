"use strict";

const steps = document.querySelectorAll(".step");
const btnPrev = document.querySelector(".btn--previous");
const btnNext = document.querySelector(".btn--next");
const barProgress = document.querySelector(".bar--active");

let currentActive = 1;

const isActive = () => {
  if (currentActive <= 1) {
    currentActive = 1;
    btnPrev.setAttribute("disabled", "");
  } else if (currentActive >= steps.length) {
    currentActive = steps.length;
    btnNext.setAttribute("disabled", "");
  } else {
    btnPrev.removeAttribute("disabled", "");
    btnNext.removeAttribute("disabled", "");
  }
};

const updateProgress = () => {
  if (currentActive === 1) {
    barProgress.style.width = "0%";
  } else {
    barProgress.style.width = `${
      (currentActive - 1) / ((steps.length - 1) / 100)
    }%`;
  }
};

const updateForwards = () => {
  currentActive++;

  steps.forEach((step, i) => {
    if (currentActive === i + 1) {
      step.classList.add("step--active");
    }
  });

  updateProgress();
  isActive();
};

const updateBackwards = () => {
  currentActive--;

  steps.forEach((step, i) => {
    if (currentActive === i) {
      step.classList.remove("step--active");
    }
  });

  updateProgress();
  isActive();
};

btnNext.addEventListener("click", updateForwards);
btnPrev.addEventListener("click", updateBackwards);
