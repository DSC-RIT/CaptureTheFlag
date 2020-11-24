module.exports = {
  PORT: process.env.NODE_ENV === "production" ? process.env.PORT : 8080,
  flag: "CTF{koL0n0n0gpj0oCf}",
  RSA: {
    p: 43n,
    q: 3n,
    n: 43n * 3n,
    phi: (43n - 1n) * (3n - 1n),
    e: 31n,
    d: 19n,
  },
};
