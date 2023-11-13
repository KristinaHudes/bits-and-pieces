"use strict";

const content = document.querySelector(".content");

const showKeys = (e) => {
  content.innerHTML = `
  <div class="content__box">
          <h2 class="content__heading">event.key</h2>
          <p class="content__key">${e.key === " " ? "Space" : e.key}</p>
        </div>
        <div class="content__box">
          <h2 class="content__heading">event.keyCode</h2>
          <p class="content__key">${e.keyCode}</p>
        </div>
        <div class="content__box">
          <h2 class="content__heading">event.code</h2>
          <p class="content__key">${e.code}</p>
        </div>`;
};

window.addEventListener("keydown", showKeys);
