var randomItem = require('random-item');

module.exports = function(names) {
  return getFirst;

  function getFirst(options) {
    var allowMale = true;
    var allowFemale = true;
    var nameOptions = [];

    if (typeof options !== 'object') {
      options = {};
    }

    if (typeof options.gender === 'string') {
      options.gender = options.gender.toLowerCase();
    }

    if (options.gender === 'male') {
      allowFemale = false;

    } else if (options.gender === 'female') {
      allowMale = false;
    }

    if (allowMale) {
      nameOptions = nameOptions.concat(names.male);
    }
    if (allowFemale) {
      nameOptions = nameOptions.concat(names.female);
    }

    return randomItem(nameOptions);
  }
};
