"use strict";
const Stack = require("./stack-class");
const { peek, isEmpty, display } = require("./stack-helperFns");

//=== 1. Create a stack class ===//

// Create a stack called starTrek and add Kirk, Spock, McCoy, and Scotty to the stack.
function main() {
  const starTrek = new Stack();

  starTrek.push("Kirk");
  starTrek.push("Spock");
  starTrek.push("McCoy");
  starTrek.push("Scotty");

  display(starTrek);

  // * Remove McCoy from your stack and display the stack
  starTrek.pop("McCoy");

  display(starTrek);

  isEmpty(starTrek);

  peek(starTrek);
}
console.log(main());

//=== 3. Check for palindromes using a stack ===//

// A palindrome is a word, phrase, or number that is spelled the same forward and backward.
// For example, “dad” is a palindrome; “A man, a plan, a canal: Panama” is a palindrome if you take
// out the spaces and ignore the punctuation; and 1,001 is a numeric palindrome. We can use a stack to
// determine whether or not a given string is a palindrome.
// Write an algorithm that uses a stack to determine whether a given input is palindrome or not. Use the
// following template as a starting point.

function is_palindrome(s) {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  let stack = new Stack();
  // create new stack
  let compare = "";
  for (let i = 0; i < s.length; i++) {
    stack.push(s[i]);
  }
  // add to stack
  for (let i = 0; i < s.length; i++) {
    compare += stack.pop();
  }
  // pop off stack and add to compare string
  return s === compare ? true : false;
  // does s = compare?
}

// true, true, true, false
console.log(is_palindrome("dad"));
console.log(is_palindrome("A man, a plan, a canal: Panama"));
console.log(is_palindrome("1001"));
console.log(is_palindrome("Tauhida"));

//=== 4. Matching parentheses in an expression ===//
// A stack can be used to ensure that an arithmetic expression has balanced parentheses.
// Write a function that takes an arithmetic expression as an argument and returns true or false
// based on matching parenthesis. As a bonus provide a meaningful error message to the user as to
// what's missing. For example, you are missing a ( or missing a ")".

// For version 1, the parentheses you need to consider are ( and ). Finding a close parenthesis
// without an open parenthesis is an error (report the location of the close); reaching the end of
// the string while still "holding" an open parenthesis is also an error (report the location of the open).

// Extension exercise: Recognize 3 pairs of brackets: (), [], and {}. These must be correctly nested; "([)]"
// is incorrect, and should report an error at the ), stating that you were expecting a ] but found a ). If this is
// starting to look and sound very familiar, congratulations - you're beginning to write a simple language parser!

// Extension extension exercise: Also recognize 2 types of quote character: "" and ''. Inside quotes, brackets aren't
// counted at all - in fact, nothing is counted until you reach the corresponding close quote.
// input: '(3 + 3'=>
function matchingParens(str) {
  const stack = new Stack();
  if (!str) return null;
  for (let i = 0; i < str.length; i++) {
    // iterate through the given string
    if (str[i] === "(") stack.push(str[i]);
    // push "(" parenthesis (only parenthesis) to the stack when found
    if (str[i] === ")") {
      if (stack.pop() === null) return false;
      // pop the stack when ")" is found
      // while iterating, if we try to pop an empty stack, we're missing open parenthesis
    }
  }
  console.log("matchingParens?");
  return stack.top === null;
  // if at the end of the string, the stack still has something on it, we have unclosed parenthesis
}

console.log(matchingParens("((3 + 2))"));

//=== 5. Sort stack ===//
// Write a program to sort a stack such that the smallest items are on the top
// (in ascending order). You can use an additional stack, but you may not use any other
// data structure (such as an array, or linked list).

function sort(stack) {
  let sortStack = new Stack();
  while (stack.top) {
    let x = stack.pop();
    while (sortStack.top && sortStack.top.data > x) {
      stack.push(sortStack.pop());
    }
    sortStack.push(x);
  }
  return console.log(display(sortStack));
}
let numStack = new Stack();
numStack.push(2);
numStack.push(4);
numStack.push(1);
numStack.push(3);

console.log(sort(numStack));
