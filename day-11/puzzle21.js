const serial = 5235

function cellPowerLevel(x,y,serial) {
  let rackID = x + 10
  let powerlevel = Math.floor(((rackID*y + serial) * rackID) / 100) % 10 - 5
  return powerlevel
}

let grid = []

for (let y=1; y<=300; y++) {
  let row = []
  for (let x=1; x<=300; x++) {
    let powerlevel = {
      x,
      y,
      powerlevel: cellPowerLevel(x,y,serial)
    }
    row.push(powerlevel)
  }
  grid.push(row)
}

let largestTotalPower = {
  x: 0,
  y: 0,
  totalPower: 0
}

for (let y=0; y<=297; y++) {
  for (let x=0; x<=297; x++) {
    let totalPower = 0
    for (let u=0; u<=2; u++) {
      for (let v=0; v<=2; v++) {
        totalPower += grid[y+u][x+v].powerlevel
      }
    }
    if (totalPower > largestTotalPower.totalPower) {
      largestTotalPower = {
        x: x+1,
        y: y+1,
        totalPower
      }
    }
  }
}

console.log(largestTotalPower)