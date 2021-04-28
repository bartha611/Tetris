const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.static(__dirname + "/bundle"));

app.get("*", (req, res) => {
  res.sendFile(`${__dirname}/bundle/index.html`);
});

app.listen(PORT, () => {
  console.log(`You are listening on port ${PORT}`);
});
