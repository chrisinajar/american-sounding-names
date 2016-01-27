
module.exports = full;

full.first = require('./first')(require('./data/first'));
full.last = require('./last')(require('./data/last'));

function full(options) {
  return [full.first(options), full.last(options)].join(' ');
}
