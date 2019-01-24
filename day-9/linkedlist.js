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
    currentNode = currentNode.next
  }

  log() {
    let node = this.head
    do  {
      console.log(node.value)
      node = node.next
    } while (node != this.head)

  }
}

let currentNode = {}

let list = new LinkedList()
list.addFirst(0)
list.addToCurrent(1)
list.addToCurrent(2)
list.addToCurrent(3)
currentNode = currentNode.next
list.removeCurrent()
list.log()