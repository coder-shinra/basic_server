const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ msg: "response from server" });
});

app.listen(3000, () => {
  console.log("this server is running");
});
