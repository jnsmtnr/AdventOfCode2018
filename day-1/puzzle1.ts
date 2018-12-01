export {}

'use strict'

declare function require(path: string): any;
const fs = require('fs');

let fileContent = fs.readFileSync('input.txt', 'utf-8');

let inputArray = fileContent.split('\n').map(x => Number(x));

let result = inputArray.reduce( (x,y) => x + y)

console.log(result)