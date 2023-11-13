"use script";

const minInputEl = document.querySelector(".min");
const maxInputEl = document.querySelector(".max");
const generateBtnEl = document.querySelector(".btn");
maxInputEl.focus();

const getRandom = (min, max) => {
  let random = min + Math.random() * (max + 1 - min);
  return Math.floor(random);
};

const generateNum = () => {
  let minValue = +minInputEl.value;
  let maxValue = +maxInputEl.value;
  const resultEl = document.querySelector(".result");

  resultEl.textContent = getRandom(minValue, maxValue);
};

generateBtnEl.addEventListener("click", generateNum);
