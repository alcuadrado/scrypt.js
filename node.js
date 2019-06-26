const crypto = require("crypto");

if (crypto.scryptSync === undefined) {
  module.exports = require("./js");
  return
}

function hash(key, salt, n, r, p, dklen, progressCb) {
  const maxmem = 2 * 128 * n * r; // See Node's doc for an explanation
  return crypto.scryptSync(key, salt, dklen, { N: n, r, p, maxmem });
}

module.exports = hash;
