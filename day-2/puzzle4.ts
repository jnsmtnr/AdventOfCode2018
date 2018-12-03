export {}

'use strict'

declare function require(path: string): any;
const fs = require('fs');

let fileContent = fs.readFileSync('input.txt', 'utf-8');

let inputArray = fileContent.split('\n');

let searchedIDs = []

for (let i=0; i<inputArray.length-1; i++) {

  for (let j=i+1; j<inputArray.length; j++) {

    let difference = 0

    let wordOne = inputArray[i]
    let wordTwo = inputArray[j]

    for (let x=0; x < inputArray[i].length; x++) {
      if (inputArray[i][x] != inputArray[j][x]) {
        difference++
      }
    }

    if (difference == 1) {
      searchedIDs.push(inputArray[i])
      searchedIDs.push(inputArray[j])
    }

  }

}

let commonLetters = ''

for (let i=0; i<searchedIDs[0].length; i++) {
  if (searchedIDs[0][i] == searchedIDs[1][i]) {
    commonLetters += searchedIDs[0][i]
  }
}

console.log(commonLetters)