const facts = require('../constants/facts')

function randomInt(min, max) {
  // Ensure that the input values are integers
  min = Math.ceil(min);
  max = Math.floor(max);

  // Generate a random integer within the specified range
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

exports.getFacts = (req, res, next) => {
  
  return(facts[randomInt(0, facts.length)]);
}

exports.getFact = (req, res, next) => {
  
  res.json(facts[randomInt(0, facts.length)]);
}

exports.getAll = (req, res, next) => {
  res.send(facts)
}