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


## Testing
`npm run test`
