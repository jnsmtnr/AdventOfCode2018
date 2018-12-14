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

let stepsDone = []
let stepsWorkingOn = []
let stepsDoable = []
let time = 0
let timeLeft = {}

stepsNotDone.forEach( (value, index) => {
  timeLeft[value] = 61 + index
})

while (stepsDone.length < 26) {
  time++
  
  // megnézem, melyik lépéseket lehet elkezdeni
  for (let i=0; i<stepsNotDone.length; i++) {
    let canItBeDone = true
    manualFiltered.forEach (elem => {
      if (stepsNotDone[i] == elem[1]) {
        if (stepsDone.indexOf(elem[0]) == -1 ) {
          canItBeDone = false
        }
      }
    })
    if (canItBeDone) {
      stepsDoable.push(stepsNotDone[i])
      stepsNotDone.splice(i,1)
    }
  }

  // megnézem, hogy tudok-e további lépésen dolgozni
  while (stepsWorkingOn.length < 5 && stepsDoable.length > 0) {
    stepsWorkingOn.push(stepsDoable.shift())
  }

  // dolgozok a lépéseken
  stepsWorkingOn.forEach( elem => {
    timeLeft[elem]--
  })

  // megnézem, befejeztem-e egy lépést
  for (let i=stepsWorkingOn.length-1; i >= 0; i--) {
    if (timeLeft[stepsWorkingOn[i]] == 0) {
      stepsDone.push(stepsWorkingOn[i])
      stepsWorkingOn.splice(i,1)
    }
  }

  console.log(stepsNotDone.join(''), '|' , stepsWorkingOn.join(''), '|' , stepsDoable.join(''), '|', stepsDone.join(''))
}
console.log(time)
