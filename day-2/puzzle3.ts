'use strict'

declare function require(path: string): any;
const fs = require('fs');

let fileContent = fs.readFileSync('input.txt', 'utf-8');

let inputArray = fileContent.split('\n');

console.log(inputArray[0]);
console.log(inputArray[inputArray.length-1]);