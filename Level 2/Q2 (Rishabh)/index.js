const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const config = require("./utils/config");
const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.post("/eval", (req, res) => {
  const correctHash = "52e2ee66ee1a384395d7697985a5cff153b7c68f";
  if (req.body.myHash === correctHash) res.send({ flag: config.FLAG });
  else res.send(false);
});

app.listen(config.PORT, () =>
  console.log(`Server running at port ${config.PORT}`)
);
