var test = require('tape');
var data = {
  male: ["John", "Chris"],
  female: ["Kayla", "Jaclyn"]
};
var first = require('../first')(data);

test('first names', function(t) {
  t.test('basic functionality', function(t) {
    t.plan(2);
    t.equal(typeof first(), 'string', 'returns a string');

    var name = first();
    var name2 = first();

    // try 100 times until we get a new name
    for (var i = 0; i < 100 && name === name2; ++i) {
      name2 = first();
    }

    t.notEqual(name, name2, 'names are random');
  });

  t.test('gender selection', function(t) {
    t.plan(2);

    var maleName = first({
      gender: 'male'
    });
    var femaleName = first({
      gender: 'female'
    });

    t.assert(data.male.indexOf(maleName) > -1, "male names return male names");
    t.assert(data.female.indexOf(femaleName) > -1, "female names return female names");
  });
});
