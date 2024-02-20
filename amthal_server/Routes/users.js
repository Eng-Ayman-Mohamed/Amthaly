const express = require("express");
const router = express.Router();

const users = [];

router.post("/user", (req, res) => {
  const item = req.body;
  const findUsers = users.find((x) => x.id === item.id);
  if (findUsers) {
    res.status(400).send("user already exist");
    return;
  }
  users.push(item);
  res.send("Done!");
});

router.get("/user", (req, res, next) => {
  if (users.length == 0) {
    res.status(400).send("no users");
    return;
  }
  res.send(users);
});

router
  .route("/user/:id")
  .get((req, res) => {
    const { id } = req.params;
    const findUser = users.findIndex((x) => x.id === id);
    if (findUser == -1) {
      res.status(400).send("this user doesn't exist ");
      return;
    }
    const index = users.findIndex((obj) => obj.id == id);
    res.send(users[index]);
  })
  .put((req, res) => {
    const item = req.body;
    const { id } = req.params;
    console.log(item, id);
    if (id !== item.id) {
      res.status(400).send("id's doesn't match");
      return;
    }
    const findUser = users.findIndex((x) => x.id === id);
    if (findUser == -1) {
      res.status(400).send("user doesn't exist");
      return;
    }
    const index = users.findIndex((obj) => obj.id == id);
    users[index] = item;
    res.status(200).send(`replaced User with ID: ${id}`);
  })
  .delete((req, res) => {
    const { id } = req.params;
    const findUser = users.findIndex((x) => x.id === id);
    if (findUser == -1) {
      res.status(400).send("user doesn't exist");
      return;
    }
    const index = users.findIndex((obj) => obj.id == id);
    users.splice(findUser, index);
    res.status(200).send(`delete User with ID: ${id}`);
  });

module.exports = router;
