"use strict";

const followersEl = document.querySelectorAll(".followers");

followersEl.forEach((el) => {
  const data = el.getAttribute("aria-controls");
  const incr = Math.ceil(data / 333);

  el.textContent = "0";

  setInterval(() => {
    if (+el.textContent < +data) {
      el.textContent = +el.textContent + incr;
    } else {
      el.textContent = data;
    }
  }, 10);
});
