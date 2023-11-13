"use strict";

const background = document.querySelector(".container");
const num = document.querySelector(".percent");

let curNum = 0;

const startCounting = setInterval(() => {
  curNum++;

  num.textContent = `${curNum}%`;
  num.style.opacity = `${scale(curNum, 1, 100, 1, 0)}`;
  background.style.backdropFilter = `blur(${scale(curNum, 1, 100, 4, 0)}rem)`;

  if (curNum > 99) {
    clearInterval(startCounting);
  }
}, 40);

const scale = (number, inMin, inMax, outMin, outMax) => {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
};
