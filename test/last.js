var test = require('tape');
var data = [
  "Vickery",
  "Wilbanks"
];
var last = require('../last')(data);

test('last names', function(t) {
  t.test('basic functionality', function(t) {
    t.plan(2);
    t.equal(typeof last(), 'string', 'returns a string');

    var name = last();
    var name2 = last();

    // try 100 times until we get a new name
    for (var i = 0; i < 100 && name === name2; ++i) {
      name2 = last();
    }

    t.notEqual(name, name2, 'names are random');
  });
});
