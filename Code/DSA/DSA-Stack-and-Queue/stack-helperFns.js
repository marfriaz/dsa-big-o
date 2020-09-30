"use strict";

//=== 2. Useful methods for a stack ===//

// * Using the Stack class above, implement the following helper functions outside of the class:
// * peek(): allows you to look at the top of the stack without removing it
// * isEmpty(): allows you to check if the stack is empty or not
// * display(): to display the stack - what is the 1st item in your stack?
// * Remove McCoy from your stack and display the stack

function peek(stack) {
  if (stack.top === null) {
    return console.log("The stack is empty.");
  }
  return console.log(stack.top.data);
}

function isEmpty(stack) {
  if (stack.top === null) {
    return console.log("The stack is empty.");
  }
  return console.log("The stack is NOT empty.");
}

function display(stack) {
  if (stack.top === null) {
    return console.log("The stack is empty.");
  }
  let node = stack.top;
  while (node.next !== null) {
    console.log(node.data);
    node = node.next;
  }
  console.log(node.data);
}

module.exports = {
  peek,
  isEmpty,
  display,
};


