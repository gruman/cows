const facts = require('../constants/facts')

function randomInt(min, max) {
  // Ensure that the input values are integers
  min = Math.ceil(min);
  max = Math.floor(max);

  // Generate a random integer within the specified range
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

exports.getFacts = (req, res, next) => {
  
  res.send(facts[randomInt(0, facts.length)]);
}
exports.getStats = (req, res, next) => {
  const message = {
    numFacts: facts.length,
    createdBy: "Matthew Gruman"
  }
  res.send(message)
}
  