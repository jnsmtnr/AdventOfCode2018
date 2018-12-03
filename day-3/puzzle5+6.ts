export {}

'use strict'

declare function require(path: string): any;
const fs = require('fs');

let fileContent = fs.readFileSync('input.txt', 'utf-8');

let inputArray = fileContent.split('\n')

if (inputArray[inputArray.length-1] == '') {
  inputArray.pop()
}

let startRegex = /[0-9]{1,3},[0-9]{1,3}/
let areaRegex = /[0-9]{1,3}x[0-9]{1,3}/

let claimed = {}

for (let i = 0; i < inputArray.length; i++) {
  let start = inputArray[i].match(startRegex)[0].split(',')
  let area = inputArray[i].match(areaRegex)[0].split('x')

  for (let y = start[1]; y < Number(start[1]) + Number(area[1]); y++) {
    for (let x = start[0]; x < Number(start[0]) + Number(area[0]); x++) {
      let key = `a${x}x${y}`
      if (claimed[key]) {
        claimed[key]++
      } else {
        claimed[key] = 1
      }
    }
  }
}

let common = 0

for (let key in claimed) {
  if (claimed[key] > 1) {
    common++
  }
}

console.log(common)

let IDRegEX = /#[0-9]*/

for (let i = 0; i < inputArray.length; i++) {
  let start = inputArray[i].match(startRegex)[0].split(',')
  let area = inputArray[i].match(areaRegex)[0].split('x')
  let commonClaim = 0

  for (let y = start[1]; y < Number(start[1]) + Number(area[1]); y++) {
    for (let x = start[0]; x < Number(start[0]) + Number(area[0]); x++) {
      let key = `a${x}x${y}`
      if (claimed[key] > 1) {
        commonClaim++
      }
    }
  }
  if (commonClaim == 0) {
    console.log(inputArray[i].match(IDRegEX)[0])
  }
}


/*
let start = inputArray[0].match(startRegex)[0].split(',')
let area = inputArray[0].match(areaRegex)[0].split('x')
let commonClaim = 0
let size = 0

for (let y = start[1]; y < Number(start[1]) + Number(area[1]); y++) {
  for (let x = start[0]; x < Number(start[0]) + Number(area[0]); x++) {
    size++
    let key = `a${x}x${y}`
    if (claimed[key] > 1) {
      commonClaim++
    }
  }
}
console.log(size)
console.log(commonClaim)
console.log(inputArray[0].match(IDRegEX)[0])
*/