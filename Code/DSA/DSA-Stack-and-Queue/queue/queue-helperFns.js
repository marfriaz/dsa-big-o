"use strict";

//=== 2. Create a queue using Singly linked list ===//

// Implement a peek() function outside of the Queue class that lets you take a peek at what the 1st item in the queue is.
// Implement a isEmpty() function outside the Queue class that allows you to check if the queue is empty or not
// Implement a display() function outside of the Queue class that lets you display what's in the queue.

function peek(queue) {
  if (!queue.first) {
    return console.log("The queue is empty.");
  }
  return console.log(queue.first);
}

function isEmpty(queue) {
  if (!queue.first && !queue.last) {
    return true;
  }
  return false;
}

function display(queue) {
  if (!queue.first) {
    return console.log("The queue is empty.");
  }
  let node = queue.first;
  while (node.next !== null) {
    console.log(node.value);
    node = node.next;
  }
  console.log(node.value);
}

module.exports = { peek, isEmpty, display };
