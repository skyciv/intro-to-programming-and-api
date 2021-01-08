# What is this?

A fast way to interact with the SkyCiv API.

# Usage

`npm i skyciv`

then...

## Require

```
const skyciv = require('skyciv');

const data = {...} // [See API documentation](http://localhost:3000/api/v3/docs/getting-started)

skyciv.request(data, function(res) {
    // Do something with results object "res"
}, options);
```

## Import

```
import skyciv = from 'skyciv';

const data = {...} // [See API documentation](http://localhost:3000/api/v3/docs/getting-started)

skyciv.request(data, function(res) {
    // Do something with results object "res"
}, options);
```

## Options

The options object takes:

* *version* - _1 | 2 | 3_ (Defaults to 3)
* *http_or_https* - _http | https_ (Defaults to https)