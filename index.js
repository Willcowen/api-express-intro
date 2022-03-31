const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();
app.use(morgan("dev"));
app.use(cors());

const port = 3030;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/`);
});

let counter = 0;

app.get("/", (req, res) => {
  console.log("got request!");
  res.send("Hello!");
});

app.get("/test", (req, res) => {
  console.log("got request!");
  res.json({ msg: "hello!" });
});

app.delete("/bye", (req, res) => {
  res.send({ msg: "goodbye forever!" });
});

app.get("/greeting", (req, res) => {
  console.log("got request!");
  counter++
  res.json({ msg: "good day" });
});

app.get("/greeting/morning", (req, res) => {
  console.log("got request!");
  counter++
  res.json({ msg: "good morning" });
});

app.get("/greeting/afternoon", (req, res) => {
  console.log("got request!");
  counter++
  res.json({ msg: "good afternoon" });
});

app.delete("/greeting", (req, res) => {
  counter++
  res.send({ msg: "goodbye!" });
});

app.get("/count", (req, res) => {
    console.log("got request!");
    res.json({ count: counter });
  });
