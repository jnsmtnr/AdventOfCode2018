const fs = require('fs')

let input = fs.readFileSync('input.txt', 'utf-8')

let regex = /-{0,1}\d+/g
let rawData = input.match(regex)

class Pixel {
  constructor(x,y,vx,vy) {
    this.x = Number(x),
    this.y = Number(y),
    this.vx = Number(vx),
    this.vy = Number(vy)
  }

  move() {
    this.x += this.vx
    this.y += this.vy
  }
}

let data = []

for (let i = 0; i <= rawData.length - 4; i += 4) {
  let pixel = new Pixel(rawData[i],rawData[i+1],rawData[i+2],rawData[i+3])
  data.push(pixel)
}

console.log(data[0])
data[0].move()
console.log(data[0])