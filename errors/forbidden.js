const { FORBIDDEN_ERROR } = require('./statusCode');

class Forbidden extends Error {
  constructor(message) {
    super(message);
    this.statusCode = FORBIDDEN_ERROR;
  }
}

module.exports = Forbidden;
