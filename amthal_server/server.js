const express = require("express");
const app = express();
app.use(express.json());
const port = 8080;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/", (req, res) => {
  res.send("Hello in Server!");
});

const amthalRouter = require("./Routes/amthal");
app.use("/amthal", amthalRouter);

const userRouter = require("./Routes/users");
app.use("/users", userRouter);

app.listen(port, () => {
  console.log(` app listening on port ${port}`);
});
