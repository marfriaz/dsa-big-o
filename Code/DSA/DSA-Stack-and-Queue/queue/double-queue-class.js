"use strict";

class _Node {
  constructor(value, prev) {
    this.value = value;
    this.prev = prev;
    this.next = null;
  }
}

class DoubleQueue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    const newNode = new _Node(data, this.last);

    if (this.first === null) {
      this.first = newNode;
    }
    if (this.last) {
      this.last.next = newNode;
    }

    //make the new node the last item on the queue
    this.last = newNode;
  }

  dequeue() {
    //if the queue is empty, there is nothing to return
    if (this.first === null) {
      return;
    }
    const firstNode = this.first;

    if (firstNode.next === null) {
      this.last = null;
    } else {
      firstNode.next.prev = null;
    }
    this.first = firstNode.next;

    return firstNode.value;
  }
}

module.exports = DoubleQueue;
