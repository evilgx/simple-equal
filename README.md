# simple-equal

A simple data compare function

## Install

```sh
$ npm install simple-equal
```

## Example

```javascript
import simpleEqual from 'simple-equal';

let a = {a:'aa',b:'bb',c:{d:'dd'}};
let b = {a:'aa',b:'bb',c:{d:'dd'}};

simpleEqual(a,b)//true
```