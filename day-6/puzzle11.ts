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

let points = {}

for (let x=minX; x<=maxX; x++) {
  for (let y=minY; y<=maxY; y++) {
    let key = 'c' + x + 'x' + y
    let minDistance = 10000
    newCoord.forEach( (coord, index) => {
      let distance = Math.abs(x - coord[0]) + Math.abs(y - coord[1])
      if (distance < minDistance) {
        minDistance = distance
        points[key] = index
      } else if (distance == minDistance) {
        points[key] = '.'
      }
    })
    
  }
}

let area = {}

for (let key in points) {
  let areaKey = points[key]
  if (area[areaKey]) {
    area[areaKey]++
  } else {
    area[areaKey] = 1
  }
}

let maxArea = 0

for (let key in area) {
  if (area[key] > maxArea) {
    maxArea = area[key]
  } 
}

console.log(maxArea)