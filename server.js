const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const fs = require("fs");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());
app.use(express.static("public"));

app.get("/api/v1/player", (req, res) => {
  try {
    let player = JSON.parse(fs.readFileSync("data/player.json"));
    res.json({ player });
  } catch (error) {
    res.json(console.log("lỗi", error));
  }
});
app.post("/api/v1/player", (req, res) => {
  let { name } = req.body;
  let players = JSON.parse(fs.readFileSync("data/player.json"));
  console.log(name);
  let player = { id: players.length + 1, name };
  try {
    players.push(player);
    fs.writeFileSync("data/player.json", JSON.stringify(players));
    res.json({ player });
  } catch (error) {
    console.log(error);
  }
});
app.get("/api/v1/scores", (req, res) => {});
app.get("/player", (req, res) => {
  res.sendFile(`${__dirname}/public/player.html`);
});
app.get("/scores", (req, res) => {
  res.sendFile(`${__dirname}/public/scores.html`);
});
app.listen(3000, () => {
  console.log("listening on port 3000");
});
