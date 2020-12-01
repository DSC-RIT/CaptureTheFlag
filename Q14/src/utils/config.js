module.exports = {
  PORT: process.env.NODE_ENV === "production" ? process.env.PORT : 8080,
  db: {
    service: "Atlas",
    collection: "users",
    url:
      "mongodb+srv://noobmaster69:12344321@cluster0.c6bhq.mongodb.net/userdata?retryWrites=true&w=majority",
  },
  solution: {
    username: "repulsive_chocolate_puffin",
    password: "Welcome to the party pal",
  },
};

//mongodb+srv://<username>:<password>@cluster0.c6bhq.mongodb.net/<dbname>?retryWrites=true&w=majority
