const fs = require('fs')

const input = fs.readFileSync('input.txt', 'utf-8')
const inputRows = input.split('\n')
const startState = inputRows[0].split(' ')[2]
const spread = []
const next = []

for (let i = 2; i < inputRows.length; i++) {
  let row = inputRows[i].split(' ')
  spread.push(row[0])
  next.push(row[2])
}

let pots = new Array(10).fill('.').concat(Array.from(startState)).concat(new Array(30).fill('.'))

let gen = 1

console.log(pots.join(''))
while (gen <= 20) {
  let newPots = []

  for (let i = 0; i < pots.length; i++) {
    if (i == 0 || i == 1 || i == pots.length - 2 || i == pots.length - 1) {
      newPots.push('.')
    } else {
      let prev = [pots[i - 2], pots[i - 1], pots[i], pots[i + 1], pots[i + 2]].join('')
      let index = spread.indexOf(prev)
      newPots.push(next[index])
    }
  }
  pots = newPots
  gen++
  console.log(pots.join(''))
}

let result = 0

pots.forEach((value, index) => {
  if (value == "#") {
    result += index - 10
  }
})

console.log(result)