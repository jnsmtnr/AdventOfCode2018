let currentNode = {}

class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }

  addFirst(value) {
    let node = {}
    node.value = value
    node.next = null
    node.prev = null
    this.head = node
    this.tail = node
    currentNode = node
  }

  addToCurrent(value) {
    let node = {}
    node.value = value
    node.next = currentNode.next
    node.prev = currentNode
    if (currentNode.next != null) {
      currentNode.next.prev = node
    }
    currentNode.next = node
    currentNode = node
  }

  /*
  addToHead(value) {
    let node = {}
    node.value = value
    node.next = this.head
    this.head = node
    if (this.tail == null) {
      this.tail = node
    }
  }

  addToTail(value) {
    let node = {}
    node.value = value
    node.next = null
    if (this.head == null) {
      this.head = node
      this.tail = node
    } else {
      this.tail.next = node
      this.tail = node
    }
  }
  */

  log() {
    let node = this.head
    do  {
      console.log(node.value)
      node = node.next
    } while (node != null)

  }

  backLog() {
    let node = this.tail
    do {
      console.log(node.value)
      node = node.prev
    } while (node != null)
  }
}

let list = new LinkedList()
list.addFirst(0)
list.addToCurrent(1)
list.addToCurrent(2)
currentNode = currentNode.prev
list.addToCurrent(3)
list.log()