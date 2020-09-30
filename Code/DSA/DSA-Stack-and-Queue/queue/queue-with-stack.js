("use strict");

const Stack = require("../stack/stack-class");
const { peek, isEmpty, display } = require("./queue-helperFns");

//=== 8. Queue implementation using a stack ===//
// There are many ways to implement a queue. You have learned using singly linked list,
// and doubly linked list. Keeping the concept of a queue in mind, implement a queue using
// 2 stacks and no other data structure. (You are not allowed to use a doubly linked list or array.
//   Use your stack implementation with a linked list from above to solve this problem.)

class stackQueue extends Stack {
  constructor() {
    super();
    this.first = this.top;
    this.last = null;
  }

  enqueue(item) {
    //if the stack is empty, just add the item and adjust the pointers
    if (this.first === null) {
      this.push(item);
      this.last = this.top;
    } else {
      //we have stuff in the stack already and need to:
      //1. invert the stack into tempStack
      const tempStack = new Stack();
      while (this.top) {
        tempStack.push(this.pop());
      }
      //2. add the item to the top of tempStack
      tempStack.push(item);
      //3. invert tempStack back into this
      while (tempStack.top) {
        this.push(tempStack.pop());
      }
      //4. fix this.first and this.last pointers
      let currNode = this.top;
      while (currNode.next !== null) {
        currNode = currNode.next;
      }
      this.last = currNode;
    }
    this.first = this.top;
  }

  dequeue() {
    this.pop();
    this.first = this.top;
  }
}

module.exports = stackQueue;

function main() {
  const queue = new stackQueue();

  queue.enqueue(2);
  queue.enqueue(3);
  queue.enqueue(4);
  console.log(queue);
}
main();
