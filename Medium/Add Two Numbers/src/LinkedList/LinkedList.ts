import { LinkedListNode } from "./LinkedListNode"

export class LinkedList<T> {
  private head: null | LinkedListNode<T> = null

  // TODO: reverse():LinkedList

  constructor(public values: Array<T>) {
    values.forEach(value => this.push(value))
  }

  // TODO: this should be generic
  getNumber(): number {
    if (this.head === null) {
      throw new Error("Linked List empty")
    }

    let curNode = this.head
    let output = ""

    while (curNode.next !== null) {
      output += curNode.val
      curNode = curNode.next
    }

    output += curNode.val
    return Number(output)
  }

  push(val: T) {
    const newNode = new LinkedListNode<T>(val)

    // List is already Empty
    if (this.head === null) {
      this.head = newNode
    } else {
      // start at the head and go towards the tail until null
      let curNode = this.head

      while (curNode.next !== null) {
        curNode = curNode.next
      }

      // add the new node as the new tail
      curNode.next = newNode
    }
  }
}
