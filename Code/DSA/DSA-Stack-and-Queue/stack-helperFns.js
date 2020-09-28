"use strict";
const Stack = require("./stack-class");

//=== 2. Useful methods for a stack ===//

// * Using the Stack class above, implement the following helper functions outside of the class:
// * peek(): allows you to look at the top of the stack without removing it
// * isEmpty(): allows you to check if the stack is empty or not
// * display(): to display the stack - what is the 1st item in your stack?
// * Remove McCoy from your stack and display the stack

function peek(stack) {
  if (!stack.top) return null;
  return stack.top.value;
}

function isEmpty(stack) {
  return stack.top === null;
}

function display(stack) {
  let currNode = stack.top;
  if (currNode === null) console.log("empty stack");
  while (currNode.next !== null) {
    console.log(currNode.value);
    currNode = currNode.next;
  }
  console.log(currNode.value);
}

module.exports = {
  peek,
  isEmpty,
  display,
};
