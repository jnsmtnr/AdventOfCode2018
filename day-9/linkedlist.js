class LinkedList {
  constructor() {
    this.head = null
  }
  add(value) {
    let node = { value }
    node.next = this.head
    this.head = node
  }
  describe() {
    let node = this.head
    do  {
      console.log(node.value)
      node = node.next
    } while (node != null)

  }
}

let list = new LinkedList()
list.add(0)
list.add(1)
list.add(2)
list.describe()