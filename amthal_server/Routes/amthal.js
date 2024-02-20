const express = require("express");
const amthal = express.Router();
const fs = require("fs");
const amthaly = require("../data/index.json");

amthal.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS,CONNECT,TRACE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, X-Content-Type-Options, Accept, X-Requested-With, Origin, Access-Control-Request-Method, Access-Control-Request-Headers"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Private-Network", true);
  //  Firefox caps this at 24 hours (86400 seconds). Chromium (starting in v76) caps at 2 hours (7200 seconds). The default value is 5 seconds.
  res.setHeader("Access-Control-Max-Age", 7200);

  next();
});

amthal.post("/mathal", (req, res) => {
  const item = req.body;
  const findMathal = amthaly.find((x) => x.id === item.id);
  if (findMathal) {
    res.status(401).send("Mathal already exist");
    return;
  }
  amthaly.push(item);
  saveData(amthaly);
  res.send("Done!");
});

const saveData = (data) => {
  const jsonData = JSON.stringify(data, null, 2);
  const finished = (error) => {
    if (error) {
      console.error(error);
      return;
    }
  };
  fs.writeFile("./data/index.json", jsonData, finished);
};

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
