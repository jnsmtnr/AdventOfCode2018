export { }

'use strict'

declare function require(path: string): any;
const fs = require('fs');

let polymer = fs.readFileSync('input.txt', 'utf-8').split('');

let itsOn = true

while (itsOn) {
  itsOn = false
  for (let i = 0; i < polymer.length - 1; i++) {
    if (
      (polymer[i] === polymer[i + 1].toUpperCase() && polymer[i].toLowerCase() === polymer[i + 1])
      || (polymer[i].toUpperCase() === polymer[i + 1] && polymer[i] === polymer[i + 1].toLowerCase())
    ) {
      polymer.splice(i,2)
      itsOn = true
      break
    }
  }
}

console.log(polymer.length)
console.log(polymer[polymer.length-3], polymer[polymer.length-2], polymer[polymer.length-1])