var quotes = require('./quotes.json');

exports.getRandomOne = () => {
  var totalAmount = quotes.length;
  var rand = Math.floor(Math.random() * totalAmount);
  return quotes[rand];
}
