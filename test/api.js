var test = require('tape');
var names = require('../index');

test('api exposure', function (t) {
  t.plan(4);

  t.equal(names().split(' ').length, 2, 'default method returns a first and last name');

  t.equal(typeof names, 'function', 'exposes a default function');
  t.equal(typeof names.first, 'function', 'exposes a first function');
  t.equal(typeof names.last, 'function', 'exposes a last function');
});
