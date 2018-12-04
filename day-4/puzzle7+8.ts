export {}

'use strict'

declare function require(path: string): any;
const fs = require('fs');

let fileContent = fs.readFileSync('input.txt', 'utf-8');

let inputArray = fileContent.split('\n')

if (inputArray[inputArray.length-1] == '') {
  inputArray.pop()
}

const dateRegEx = /[0-9]{4}-[0-9]{2}-[0-9]{2} [0-9]{2}\:[0-9]{2}/

inputArray.sort( function(a,b) {
  return a.match(dateRegEx)[0].replace(/[-: ]/g,'') - b.match(dateRegEx)[0].replace(/[-: ]/g,'')
})

