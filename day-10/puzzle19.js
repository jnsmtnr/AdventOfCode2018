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

const c = document.getElementById("myCanvas");
const ctx = c.getContext("2d");

function drawPixel(x,y) {
  let newX = x + 100
  let newY = y + 50
  ctx.fillRect(newX,newY,1,1);
}

let time = document.getElementById('time')
time.addEventListener("change", drawPoints)

function drawPoints() {
  let input = document.getElementById('rawData').innerText
  let regex = /-{0,1}\d+/g
  let rawData = input.match(regex)
  let data = []
  for (let i = 0; i <= rawData.length - 4; i += 4) {
    let pixel = new Pixel(rawData[i],rawData[i+1],rawData[i+2],rawData[i+3])
    data.push(pixel)
  }
  
  c.width = c.width
  let newTime = Number(document.getElementById('time').value)
  for (let i=1; i<=newTime; i++) {
    data.forEach(point => {
      point.move()
    })
  }
  data.forEach(point => {
    drawPixel(point.x,point.y)
  })
  console.log(data[0],newTime)

}

