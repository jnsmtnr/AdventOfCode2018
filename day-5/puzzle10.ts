export {}

'use strict'

declare function require(path: string): any;
const fs = require('fs');

let polymer = fs.readFileSync('input.txt', 'utf-8');

let abc = []

for (let letter of polymer) {
  if (abc.indexOf(letter.toUpperCase()) == -1) {
    abc.push(letter.toUpperCase())
  }
}

abc.forEach( function(letter) {
  let letterToChange = new RegExp(letter,'gi',)
  let newPolymer = polymer.replace(letterToChange,'').split('')
  let itsOn = true
  while (itsOn) {
    itsOn = false
    for (let i = 0; i < newPolymer.length - 1; i++) {
      if (
        (newPolymer[i] === newPolymer[i + 1].toUpperCase() && newPolymer[i].toLowerCase() === newPolymer[i + 1])
        || (newPolymer[i].toUpperCase() === newPolymer[i + 1] && newPolymer[i] === newPolymer[i + 1].toLowerCase())
      ) {
        newPolymer.splice(i,2)
        itsOn = true
        break
      }
    }
  }
  console.log(newPolymer.length)
})