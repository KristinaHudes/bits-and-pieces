"use strict";

const textareaEl = document.querySelector(".textarea");
const choicesEl = document.querySelector(".choices");

textareaEl.focus();

const getRandom = () => {
  const choicesAppended = document.querySelectorAll(".choice");
  return choicesAppended[Math.floor(Math.random() * choicesAppended.length)];
};

const selectRandom = () => {
  const times = 25;

  const interval = setInterval(() => {
    const randomChoice = getRandom();
    randomChoice.classList.add("active");

    setTimeout(() => {
      randomChoice.classList.remove("active");
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);

    setTimeout(() => {
      const finalChoice = getRandom();
      finalChoice.classList.add("active");
    }, 100);
  }, times * 100);
};

const addChoice = (e) => {
  const choices = e.target.value
    .split(",")
    .map((value) => value.trim())
    .filter((value) => value !== "");

  choicesEl.innerHTML = "";

  choices.forEach((c) => {
    const choiceEl = document.createElement("span");
    choiceEl.textContent = c;
    choiceEl.classList.add("choice");
    choicesEl.append(choiceEl);
  });
};

const pickChoice = (e) => {
  addChoice(e);

  if (e.key === "Enter") {
    e.target.value = "";
    selectRandom();
  }
};

textareaEl.addEventListener("keyup", pickChoice);
