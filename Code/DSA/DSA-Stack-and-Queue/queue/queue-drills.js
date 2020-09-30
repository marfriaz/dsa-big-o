"use strict";
const Queue = require("./queue-class");
const DoubleQueue = require("./double-queue-class");
const { peek, isEmpty, display } = require("./queue-helperFns");

//=== 6. Create a queue using Singly linked list ===//

// Create a stack called starTrek and add Kirk, Spock, McCoy, and Scotty to the stack.
function queueTest() {
  const starTrekQ = new Queue();

  starTrekQ.enqueue("Kirk");
  starTrekQ.enqueue("Spock");
  starTrekQ.enqueue("Uhara");
  starTrekQ.enqueue("Sulu");
  starTrekQ.enqueue("Checkov");

  display(starTrekQ);

  starTrekQ.dequeue();
  starTrekQ.dequeue();
  // Remove Spock from the queue and display the resulting queue.

  display(starTrekQ);
}
// queueTest();

//=== 7. Create a queue class using Doubly linked List ===//
// Use the items listed in #6 and enqueue them to your queue.
// * Check to see who is first one on the Queue?

function doubleQueueTest() {
  const starTrekQ = new DoubleQueue();

  starTrekQ.enqueue("Kirk");
  starTrekQ.enqueue("Spock");
  starTrekQ.enqueue("Uhara");
  starTrekQ.enqueue("Sulu");
  starTrekQ.enqueue("Checkov");

  // display(starTrekQ);
  // console.log('###############');

  starTrekQ.dequeue();
  starTrekQ.dequeue();

  // display(starTrekQ);
  peek(starTrekQ);
}
doubleQueueTest();

//=== 9. Square dance pairing ===//
// As people come to the dance floor, they should be paired off as quickly as possible:
// man with woman, man with woman, all the way down the line. If several men arrive in a row,
// they should be paired in the order they came, and likewise if several women do. Maintain a queue of "spares"
// (men for whom you have no women yet, or vice versa), and pair them as appropriate.
// * F Jane
// * M Frank
// * M John
// * M Sherlock
// * F Madonna
// * M David
// * M Christopher
// * F Beyonce
// * Female dancer is Jane, and the male dancer is Frank
// * Female dancer is Madonna, and the male dancer is John
// * Female dancer is Beyonce, and the male dancer is Sherlock
// * There are 2 male dancers waiting to dance

function pairDancers(dancers) {
  const fQueue = new Queue();
  const mQueue = new Queue();
  dancers.forEach((dancer) => {
    if (dancer[0] === "F") {
      fQueue.enqueue(dancer);
    } else {
      mQueue.enqueue(dancer);
    }
    if (fQueue.first && mQueue.first) {
      let maleDancer = mQueue.dequeue();
      let femDancer = fQueue.dequeue();
      console.log(`${femDancer} is paired with ${maleDancer}`);
    }
  });
  if (mQueue.length > 0) {
    console.log(`There are ${mQueue.length} male dancers waiting to dance`);
  } else if (fQueue.length > 0) {
    console.log(`There are ${fQueue.length} female dancers waiting to dance`);
  }
}

// pairDancers([
//   "F Jane",
//   "M Frank",
//   "M John",
//   "M Sherlock",
//   "F Madonna",
//   "M David",
//   "F Beyonce",
// ]);

//=== 10. The Ophidian Bank ===//

// At the Ophidian Bank, a single teller serves a long queue of people.
// New customers join the end of the queue, and the teller will serve a customer only
// if they have all of the appropriate paperwork. Write a representation of this queue;
// 25% of the time (random), a customer's paperwork isn't quite right, and it's back to the end of the queue.
// Show what a few minutes of the bank's lobby would look like.
