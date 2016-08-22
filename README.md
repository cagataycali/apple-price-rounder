# Installing

```
sudo npm i apple-price-rounder --save
```

# Using

```
var R = require('apple-price-rounder');

R(3.55)
  .then((value) => {console.log('Output', value);})
  .catch((err) => {console.log('Error', err);})
```

# Running tests

```
npm test
```
