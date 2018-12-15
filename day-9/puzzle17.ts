export { }

'use strict'

declare function require(path: string): any
const fs = require('fs')

let input = fs.readFileSync('input.txt', 'utf-8').split(' ')

//let players = Number(input[0])
//let last = Number(input[6])

let players = 9
let last = 1618

let circle = [0]

let currentMarbleIndex = 0
let current = 0
let i = 1
let scores = {}

while (i < 40) {
  let currentPlayer = 'player' + ((i % (players)) == 0 ? players : i % (players))
  if (i % 23 != 0) {
    currentMarbleIndex = currentMarbleIndex + 2
    if (currentMarbleIndex > circle.length) {
      currentMarbleIndex -= circle.length
    }
    circle.splice(currentMarbleIndex, 0, i)
  } else {
    currentMarbleIndex = currentMarbleIndex - 7
    if (currentMarbleIndex < 0) {
      currentMarbleIndex += circle.length
    }
    current = circle.splice(currentMarbleIndex, 1)[0] + i
    if (scores[currentPlayer]) {
      scores[currentPlayer] += current
    } else {
      scores[currentPlayer] = current
    }
    if (currentMarbleIndex > circle.length -1 ) {
      currentMarbleIndex = 0
    }
  }
  i++
  console.log(circle.join(' '))
  console.log(current)
}

console.log(scores)