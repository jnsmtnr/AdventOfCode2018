const serial = 5235

function cellPowerLevel(x, y, serial) {
  let rackID = x + 10
  let powerlevel = Math.floor(((rackID * y + serial) * rackID) / 100) % 10 - 5
  return powerlevel
}

let grid = []

for (let y = 1; y <= 300; y++) {
  let row = []
  for (let x = 1; x <= 300; x++) {
    let powerlevel = {
      x,
      y,
      powerlevel: cellPowerLevel(x, y, serial)
    }
    row.push(powerlevel)
  }
  grid.push(row)
}

let largestTotalPower = {
  x: 0,
  y: 0,
  totalPower: 0,
  size: 0
}

for (let size = 1; size <= 300; size++) {
  console.log(size)
  for (let y = 0; y <= 300 - size; y++) {
    for (let x = 0; x <= 300 - size; x++) {
      let totalPower = 0
      for (let u = 0; u < size; u++) {
        for (let v = 0; v < size; v++) {
          totalPower += grid[y + u][x + v].powerlevel
        }
      }
      if (totalPower > largestTotalPower.totalPower) {
        largestTotalPower = {
          x: x + 1,
          y: y + 1,
          totalPower,
          size
        }
      }
    }
  }
}

console.log(largestTotalPower)