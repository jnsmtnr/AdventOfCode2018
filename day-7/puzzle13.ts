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

let values = {}

manualFiltered.forEach( elem => {
  if ( !(values[elem[0]]) ) {
    values[elem[0]] = 0
  }
  if ( !(values[elem[1]]) ) {
    values[elem[1]] = 0
  }
})

let on = true

while(on) {
  on = false
  manualFiltered.forEach( elem => {
    if ( values[elem[0]] <= values[elem[1]]) {
      values[elem[0]] = values[elem[1]] +1
      on = true
    }
  })
}

console.log(values)