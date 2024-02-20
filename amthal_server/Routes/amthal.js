const express = require("express");
const amthal = express.Router();

const amthaly = require("../data/index.json");

amthal.route("/one").get((req, res) => {
  const mathal = amthaly[Math.floor(Math.random() * amthaly.length)];
  res.json(mathal);
});

amthal.route("/ten").get((req, res) => {
  let randomList = new Set();

  while (randomList.size < 10) {
    let randomNum = Math.floor(Math.random() * amthaly.length);
    if (!randomList.has(randomNum)) {
      randomList.add(randomNum);
    }
  }
  const randomTen = [...randomList].map((index) => {
    return amthaly[index];
  });
  res.send(randomTen);
});

module.exports = amthal;
