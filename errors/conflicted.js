const { CONFLICT_ERROR } = require('./statusCode');

class Conflicted extends Error {
  constructor(message) {
    super(message);
    this.statusCode = CONFLICT_ERROR;
  }
}

module.exports = Conflicted;
