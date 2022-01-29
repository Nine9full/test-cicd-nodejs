const express = require("express");
const app = express();
const port = 3000;

const users = [];

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/v1/user/:name", (req, res) => {
  users.push({
    name: req.params.name,
  });
  res.json({
    name: req.params.name,
  });
});

app.get("/v1/users", (req, res) => {
  res.json(users);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
