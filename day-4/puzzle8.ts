export { }

'use strict'

declare function require(path: string): any;
const fs = require('fs');

let fileContent = fs.readFileSync('input.txt', 'utf-8');

let inputArray = fileContent.split('\n')

if (inputArray[inputArray.length - 1] == '') {
  inputArray.pop()
}

const dateRegEx = /[0-9]{4}-[0-9]{2}-[0-9]{2} [0-9]{2}\:[0-9]{2}/

let chrono = inputArray.sort(function (a, b) {
  return a.match(dateRegEx)[0].replace(/[-: ]/g, '') - b.match(dateRegEx)[0].replace(/[-: ]/g, '')
})

let sleptMinutes = {}
let currentGuard = ''
let startSleep = 0
let stopSleep = 0

for (let i = 0; i < chrono.length; i++) {

  if (chrono[i].match(/#[0-9]*/)) {
    currentGuard = chrono[i].match(/#[0-9]*/)[0]
  }
  
  else if (chrono[i].indexOf('asleep') != -1) {
    startSleep = Number(chrono[i].match(/:[0-9]*/)[0].replace(':', ''))
  }
  
  else if (chrono[i].indexOf('wakes') != -1) {
    stopSleep = Number(chrono[i].match(/:[0-9]*/)[0].replace(':', ''))
    for (let x = startSleep; x < stopSleep; x++) {
      let key = currentGuard + 'in' + x
      if (sleptMinutes[key]) {
        sleptMinutes[key]++
      } else {
        sleptMinutes[key] = 1
      }
    }
  }
}

let mostSleptInMinute = 0

for (let key in sleptMinutes) {
  if (sleptMinutes[key] > mostSleptInMinute) {
    mostSleptInMinute = sleptMinutes[key]
  }
}

let mostSleptInMinuteByGuard = ''

for (let key in sleptMinutes) {
  if (sleptMinutes[key] === mostSleptInMinute) {
    mostSleptInMinuteByGuard = key
  }
}

let result = Number(mostSleptInMinuteByGuard.split('in')[0].replace('#','')) * Number(mostSleptInMinuteByGuard.split('in')[1])

console.log(result)