"use strict";

const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
const btn = document.querySelector(".btn");

async function getQuote() {
  const config = {
    headers: {
      "X-Api-Key": "bU4Jc0GatloJ1gcc4/N7/w==ypnEICxGAhRnR2Qc",
    },
  };

  const res = await fetch(
    "https://api.api-ninjas.com/v1/quotes?category=inspirational",
    config
  );

  const [{ quote: apiQuote, author: apiAuthor }] = await res.json();

  quote.textContent = `"${apiQuote}"`;
  author.textContent = apiAuthor;
}

getQuote();

btn.addEventListener("click", getQuote);
