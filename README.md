# American Sounding Names
Ever needed to generate a bunch of names but didn't want to fill your system with "Test User 2851"... American Sounding Names!!

## Installation
`npm install american-sounding-names`

## Usage
```js
var names = require('american-sounding-names');

var randomName = [names.first(), names.last()].join(' ');
```

## API

#### `.first([options])`
Return a random american sounding first name.

Parameters:
* `options`
  * `gender`: (string) 'male' or 'female' to limit the result to one or the other
  
#### `.last([options])`
Return a random american sounding first name.

* `options` does nothing lol


## Testing
`npm run test`