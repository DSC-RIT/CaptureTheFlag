const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const { TextEncoder, TextDecoder } = require("util");
const config = require("./utils/config");

const app = express();

app.set("view engine", "ejs");

app.use((req, res, next) => {
  res.setHeader("clue", "/primes/1.txt");
  next();
});

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  let enc = new TextEncoder();
  let dec = new TextDecoder();
  const cipher = [];
  for (let i = 0; i < config.flag.length; i++) {
    let letter = BigInt(enc.encode(config.flag[i])[0]);
    let encrypted = letter ** config.RSA.e % config.RSA.n;
    //console.log(config.flag[i], encrypted);
    cipher.push(Number(encrypted));
  }

  const cipherText = dec.decode(new Uint8Array(cipher));
  res.render("index", { cipherText });
});

app.listen(config.PORT, () =>
  console.log(`Server is running at port ${config.PORT}`)
);
