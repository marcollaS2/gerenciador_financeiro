const express = require("express");

const app = express();

app.listen(5587, () => console.log("Gatinho."));

app.get("/", (req, res) => {
  res.send("minhal");
});
app.get("/cachorro", (req, res) => {
  res.send("AuAu");
});
const dados = [];
app.get("/j", (req, res) => {
  res.json({ dados });
});
