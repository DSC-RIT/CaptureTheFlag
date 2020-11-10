const express = require("express");
const path = require("path");
const Buffer = require("safe-buffer").Buffer;
const bodyParser = require("body-parser");
const config = require("./utils/config");

const app = express();

app.use((req, res, next) => {
  const base64 = Buffer.from(JSON.stringify(config.db)).toString("base64");
  res.set("X-DisIsDaWae", base64);
  next();
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (
    username === config.solution.username &&
    password === config.solution.password
  ) {
    res.send("Successful!");
  }
  res.redirect("/");
});

app.listen(config.PORT, () =>
  console.log(`Server is running at port ${config.PORT}`)
);
