"use strict";

const audioFiles = {
  "Arctic Monkeys": "Old Yellow Bricks",
  "Fall Out Boy": "The Phoenix",
  "Imagine Dragons": "Friction",
  Muse: "Undisclosed Desires",
  "Oomph!!": "Labyrinth",
  Placebo: "Post Blue",
};

const btnsContainer = document.querySelector(".btn-container");

for (const [singer, song] of Object.entries(audioFiles)) {
  const newBtn = document.createElement("button");

  newBtn.textContent = `${song}`;
  newBtn.classList.add("btn");
  btnsContainer.appendChild(newBtn);

  newBtn.addEventListener("mouseover", () => {
    newBtn.textContent = `${singer}`;
  });

  newBtn.addEventListener("mouseout", () => {
    newBtn.textContent = `${song}`;
  });
}

const playAudio = (e) => {
  const audios = document.querySelectorAll("audio");
  const btn = e.target.textContent.replaceAll(" ", "%20");

  audios.forEach((audio) => {
    audio.currentTime = 0;
    audio.volume = 0.3;

    if (audio.src.includes(btn) && audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  });
};

btnsContainer.addEventListener("click", playAudio);
