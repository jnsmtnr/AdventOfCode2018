'use strict'

declare function require(path: string): any;
const fs = require('fs');

let fileContent = fs.readFileSync('input.txt', 'utf-8');

let inputArray = fileContent.split('\n').map(x => Number(x));

let freqArray = [0];
let actFreq = 0;
let notFound = true

while (notFound) {
  inputArray.forEach(element => {
    actFreq += element
    if (freqArray.indexOf(actFreq) != -1) {
      console.log(actFreq)
      notFound = false
    }
    freqArray.push(actFreq)
  });
}
