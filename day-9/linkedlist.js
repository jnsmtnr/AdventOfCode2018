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
      node = node.next
    } while (node != this.head)
    console.log(log)
  }
}

let currentNode = {}

let list = new LinkedList()

list.addFirst(0)

for (let i=1; i<=22; i++) {
  if (i % 23 != 0) {
    currentNode = currentNode.next
    list.addToCurrent(i)
  }
}

list.log()