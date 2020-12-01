const mongoose = require("mongoose");
const randomString = require("randomstring");
const {
  uniqueNamesGenerator,
  adjectives,
  colors,
  animals,
} = require("unique-names-generator");

const db = require("./config").db;

module.exports = async () => {
  console.log("Connecting to mongodb...");
  mongoose.connect(
    `mongodb+srv://${db.username}:${db.password}@cluster0.c6bhq.mongodb.net/${db.database}?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  );
  console.log("Connected!");

  const User = mongoose.model("User", {
    user_id: String,
    username: String,
    hashed_password: String,
    encryption_method: String,
  });

  //Adds random data
  /*
  for (let i = 0; i < 8; i++) {
    const username = uniqueNamesGenerator({
      dictionaries: [adjectives, colors, animals],
    });
    const new_user = new User({
      user_id: randomString.generate(8),
      username: username,
      hashed_password: randomString.generate(25),
      encryption_method: "AES",
    });

    const r = await new_user.save();
    console.log(i);
  }
*/
  //Adds solution user
  /*
  const username = uniqueNamesGenerator({
    dictionaries: [adjectives, colors, animals],
  });
  const answer_user = new User({
    user_id: randomString.generate(8),
    username: username,
    hashed_password: "Jrypbzr gb gur cnegl cny",
    encryption_method: "Caesar",
  });

  console.log(username);

  answer_user.save().then(() => console.log("Done"));
  */
};
