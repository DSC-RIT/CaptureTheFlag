const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const crypto = require("crypto");
const config = require("./utils/config");

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/eval", (req, res) => {
  try {
    const s = req.body.s;
    const t = req.body.t;
    if (s.length != t.length || s === t) {
      res.send("Your input are either too different or too alike");
    } else {
      const hash_1 = crypto.createHash("md5").update(config.salt + s).digest("hex");
      const hash_2 = crypto.createHash("md5").update(config.salt + t).digest("hex");
      
      if (hash_1 === hash_2) {
        res.send("Flag: " + config.flag);
      } else {
        res.send("Hashes of provided input are different");
      }
    }
  } catch (e) {
    console.log(e.message);
    res.redirect("/");
  }
});

app.listen(config.PORT, () => console.log(`Server running at port ${config.PORT}`));
