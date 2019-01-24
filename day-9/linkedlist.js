class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }
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

  log() {
    let node = this.head
    do  {
      console.log(node.value)
      node = node.next
    } while (node != null)

  }
}

let list = new LinkedList()
list.addToTail(0)
list.addToTail(1)
list.addToTail(2)
list.addToHead('head')
list.addToTail(3)
list.log()