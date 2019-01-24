class LinkedList {
  constructor() {
    this.head = null
  }

  addFirst(value) {
    let node = {}
    node.value = value
    node.next = node
    node.prev = node
    currentNode = node
    this.head = node
  }

  addToCurrent(value) {
    let node = {}
    node.value = value
    node.next = currentNode.next
    node.prev = currentNode
    currentNode.next.prev = node
    currentNode.next = node
    currentNode = node
  }

  removeCurrent() {
    currentNode.prev.next = currentNode.next
    currentNode.next.prev = currentNode.prev
    if (currentNode == this.head) {
      this.head = currentNode.next
    }
    let value = currentNode.value
    currentNode = currentNode.next
    return value
  }

  log() {
    let node = this.head
    let log = ""
    do  {
      log += node.value + " "
      if (node == currentNode) {
        log += "!"
      }
      node = node.next
    } while (node != this.head)
    console.log(log)
  }
}

let startTime = Date.now()

let players = 412
let last = 71646
let scores = {}

let currentNode = {}

let list = new LinkedList()

list.addFirst(0)

for (let i=1; i<=last*100; i++) {
  let currentPlayer = "player" + ((i % (players)) == 0 ? players : i % (players))
  if (i % 23 != 0) {
    currentNode = currentNode.next
    list.addToCurrent(i)
  } else {
    currentNode = currentNode.prev.prev.prev.prev.prev.prev.prev
    let current = list.removeCurrent()
    if (scores[currentPlayer]) {
      scores[currentPlayer] += current + i
    } else {
      scores[currentPlayer] = current + i
    }
  }
}

let highScore = 0

for (let player in scores) {
  if (scores[player] > highScore) {
    highScore = scores[player]
  }
}

let endTime = Date.now()

console.log(highScore)
console.log(endTime - startTime)