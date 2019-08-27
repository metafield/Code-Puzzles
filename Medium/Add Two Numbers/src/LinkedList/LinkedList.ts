import { LinkedListNode } from "./LinkedListNode";

export class LinkedList<T> {
  private head: null | LinkedListNode<T> = null;

  printSelf(): void {
    let curNode = this.head;
    let output = "";

    while (curNode.next !== null) {
      output += curNode.val;
      curNode = curNode.next;
    }

    output += curNode.val;
    console.log(output);
  }

  add(val: T) {
    const newNode = new LinkedListNode<T>(val);

    // List is already Empty
    if (this.head === null) {
      this.head = newNode;
    } else {
      // start at the head and go towards the tail until null
      let curNode = this.head;

      while (curNode.next !== null) {
        curNode = curNode.next;
      }

      // add the new node as the new tail
      curNode.next = newNode;
    }
  }
}
