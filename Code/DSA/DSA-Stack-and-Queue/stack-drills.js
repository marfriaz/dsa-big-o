"use strict";

const Stack = require("./stack");
const {
  peek,
  isEmpty,
  display,
  is_palindrome,
  parenthesisCheck,
  sortStack,
} = require("./stackFns");

//=== 1. Create a stack class ===//

// Create a stack called starTrek and add Kirk, Spock, McCoy, and Scotty to the stack.
function main() {
  const starTrek = new Stack();

  console.log(isEmpty(starTrek));

  console.log("#######");

  starTrek.push("Kirk");
  starTrek.push("Spock");
  starTrek.push("McCoy");
  starTrek.push("Scotty");

  display(starTrek);

  starTrek.pop();

  console.log("#######");

  display(starTrek);

  console.log("#######");

  console.log(isEmpty(starTrek));

  console.log("#######");

  console.log(peek(starTrek));
}
