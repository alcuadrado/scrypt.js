const crypto = require('crypto')

function hash (key, salt, n, r, p, dklen, progressCb) {
  const maxmem = 2 * 128 * n * r // See Node's doc for an explanation
  return crypto.scryptSync(key, salt, dklen, { N: n, r, p, maxmem })
}

if (crypto.scryptSync === undefined) {
  module.exports = require('./js')
} else {
  module.exports = hash
}
