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

let guardSleep = {}
let currentGuard = ''
let startSleep = 0
let stopSleep = 0
let sleepTime = 0

for (let i = 0; i < chrono.length-1; i++) {
  
  if (chrono[i].match(/#[0-9]*/)) {
    currentGuard = chrono[i].match(/#[0-9]*/)[0]
  } else if (chrono[i].indexOf('asleep') != -1) {
    startSleep = Number(chrono[i].match(/:[0-9]*/)[0].replace(':',''))
  } else if (chrono[i].indexOf('wakes') != -1) {
    stopSleep = Number(chrono[i].match(/:[0-9]*/)[0].replace(':',''))
    sleepTime = stopSleep - startSleep
    if (guardSleep[currentGuard]) {
      guardSleep[currentGuard] += sleepTime
    } else {
      guardSleep[currentGuard] = sleepTime
    }
  }
}

let maxSleep = 0

for (let key in guardSleep) {
  if (guardSleep[key] > maxSleep) {
    maxSleep = guardSleep[key]
  }
}

for (let key in guardSleep) {
  if (guardSleep[key] == maxSleep) {
    console.log(key)
  }
}

