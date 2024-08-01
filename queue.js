/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    let node = new Node(val);

    if (this.first && this.first === this.last) {
      this.first.next = node;
      this.last = this.first.next;
    } else if (!this.isEmpty()) {
      this.last.next = node;
      this.last = this.last.next;
    } else if (this.isEmpty()) {
      this.first = node;
      this.last = node;
    }
    this.size++;
    return undefined;
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    if (!this.first) throw new Error("Can't dequeue from an empty queue.");
    let nodeValue = this.first.val;
    if (this.first === this.last) {
      this.first = null;
      this.last = null;
    } else {
      nodeValue = this.first.val;
      let temp = this.first;
      this.first = this.first.next;
      temp = null;
    }
    this.size--;
    return nodeValue;
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    return this.first.val;
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    if (this.first) {
      return false;
    } else {
      return true;
    }
  }
}

module.exports = Queue;
