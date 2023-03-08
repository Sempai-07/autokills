class ErrorTime extends Error {
  constructor(error) {
    super(error);
  }
};

class ErrorClient extends Error {
  constructor(error) {
    super(error);
  }
};

module.exports = {
  ErrorTime,
  ErrorClient
}