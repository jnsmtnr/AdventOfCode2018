const serial = 5235

function cellPowerLevel(x,y,serial) {
  let rackID = x + 10
  let powerlevel = Math.floor(((rackID*y + serial) * rackID) / 100) % 10 - 5
  return powerlevel
}