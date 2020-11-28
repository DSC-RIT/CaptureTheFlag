const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const md5 = require("./utils/md5");
const config = require("./utils/config");

const app = express();

app.use((req, res, next) => {
  res.cookie("hint", "try postman");
  next();
});

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

const { flag, salt } = config;

app.post("/eval", (req, res) => {
  try {
    const s = req.body.s;
    const t = req.body.t;
    if (s.length != t.length || s === t) {
      res.send("Your input are either too different or too alike");
    } else {
      const hash_1 = md5(salt + s);
      const hash_2 = md5(salt + t);

      if (hash_1 === hash_2) {
        res.send("Flag: " + flag);
      } else {
        res.send("Hashes of provided input are different");
      }
    }
  } catch (e) {
    console.log(e.message);
    res.redirect("/");
  }
});

app.listen(config.PORT, () =>
  console.log(`Server running at port ${config.PORT}`)
);
