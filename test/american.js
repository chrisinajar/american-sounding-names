var test = require('tape');
var names = require('../index');

test('ensure names generated are american', function (t) {
  t.ok(true, ['does', names(), 'sound american to you?'].join(' ').toUpperCase());
  t.end();
});
