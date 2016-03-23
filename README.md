# American Sounding Names
Ever needed to generate a bunch of names but didn't want to fill your system with `Test User 2851`?

## Installation
`npm install american-sounding-names`

## Usage
```js
var names = require('american-sounding-names');

var randomName = names({ gender: 'female' });

var firstName = names.first();

var lastName = names.last();

```

## API

#### `names([options])`
Returns a random full name.

Parameters:
* `options`
  * `gender`: (string) 'male' or 'female' to limit the result to one or the other


#### `.first([options])`
Return a random american sounding first name.

Parameters:
* `options`
  * `gender`: (string) 'male' or 'female' to limit the result to one or the other
  
#### `.last([options])`
Return a random american sounding last name.

* `options` does nothing lol


## Contributing
Pull requests are more than welcome, and will almost always be merged and responded to with great sarcasm.

There are only 3 rules:
 * Reasonable belief than a person with American citizenship with that name exists, will exist, or has existed at any time.
 * Type it out with the US keyboard layout using the English alphabet so that uneducated Americans can sound out the sweetness of freedom.
 * No removing names, America is a melting pot you judgemental bitch.


## Testing
`npm run test`
