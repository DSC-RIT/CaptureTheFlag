module.exports = {
  PORT: process.env.NODE_ENV === "production" ? process.env.PORT : 8080,
  db: {
    service: "Atlas",
    username: "noobmaster69",
    password: "12344321",
    collection: "users",
    database: "userdata",
  },
  solution: {
    username: "repulsive_chocolate_puffin",
    password: "Welcome to the party pal",
  },
};

//mongodb+srv://<username>:<password>@cluster0.c6bhq.mongodb.net/<dbname>?retryWrites=true&w=majority
