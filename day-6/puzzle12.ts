export {}

'use strict'

declare function require(path: string): any
const fs = require('fs')

let coord = fs.readFileSync('input.txt','utf-8').split('\n')

let newCoord = coord.map(function(elem) {
  let temp = elem.split(', ')
  return temp.map(elem => Number(elem))
})

let minX = 1000
let minY = 1000
let maxX = 0
let maxY = 0

newCoord.forEach(elem => {
  if (elem[0] < minX) {
    minX = elem[0]
  }
  if (elem[0] > maxX) {
    maxX = elem[0]
  }
  if (elem[1] < minY) {
    minY = elem[1]
  }
  if (elem[1] > maxY) {
    maxY = elem[1]
  }
});

console.log(minX, minY, maxX, maxY)

let area = 0

for (let x = minX; x <= maxX; x++) {
  for (let y = minY; y <= maxY; y++) {
    let totalDistance = 0
    newCoord.forEach( elem => {
      let distance = Math.abs(elem[0] - x) + Math.abs(elem[1] - y)
      totalDistance += distance
    })
    if (totalDistance < 10000) {
      area++
    }
  }
}

console.log(area)