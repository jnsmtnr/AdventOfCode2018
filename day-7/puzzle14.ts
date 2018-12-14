export {}

'use strict'

declare function require(path: string): any
const fs = require('fs')

let manual = fs.readFileSync('input.txt','utf-8').split('\n')
if (manual[manual.length-1] == '') {
  manual.pop()
}

let manualFiltered = manual.map(elem => {
  let splitted = elem.split(' ')
  return [splitted[1], splitted[7]]
})

let stepsNotDone = []
manualFiltered.forEach( elem => {
  if (stepsNotDone.indexOf(elem[0]) == -1) {
    stepsNotDone.push(elem[0])
  }
  if (stepsNotDone.indexOf(elem[1]) == -1) {
    stepsNotDone.push(elem[1])
  }
})

stepsNotDone.sort()