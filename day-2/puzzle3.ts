'use strict'

declare function require(path: string): any;
const fs = require('fs');

let fileContent = fs.readFileSync('input.txt', 'utf-8');

let inputArray = fileContent.split('\n');

let numberOfTwoLetters = 0
let numberOfThreeLetters = 0

for (let elem of inputArray) {

  let letters = {}

  let twoLetters = false
  let threeLetters = false
  
  for (let letter of elem) {
    
    if (letters[letter]) {
      letters[letter] += 1
    } else {
      letters[letter] = 1
    }
  }
  
  for (let key in letters) {
    if (letters[key] === 2) {
      twoLetters = true
    }
    if (letters[key] === 3) {
      threeLetters = true
    }
  }

  if (twoLetters) {
    numberOfTwoLetters++
  }
  if (threeLetters) {
    numberOfThreeLetters++
  }
}

console.log(numberOfTwoLetters*numberOfThreeLetters)