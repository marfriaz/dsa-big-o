//==== EVEN OR ODD ====//

//What is the Big O of the following algorithm? Explain your answer
function isEven(value) {
  if (value % 2 === 0) {
    return true;
  } else return false;
}
// Constant Time O(1): (O)1 No matter the size of your input, the algorithm will take the same amount of time to complete.
//a boolean; the input is just one value with one operation being performed on it

//=== ARE YOU HERE? ==//

// What is the Big O of the following algorithm? Explain your answer
function areYouHere(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    const el1 = arr1[i];
    for (let j = 0; j < arr2.length; j++) {
      const el2 = arr2[j];
      if (el1 === el2) return true;
    }
  }
  return false;
}

//Polynomial time O(n^k): 0(n^2) a running time that would be some input size n raised to some constant power k.
// The easiest way to understand polynomial time complexity is with nested loops.
// An algorithm that requires 2 levels of looping over an input would be O(n^2)
// O(array1.length * array2.length)
//compares every el in arr 1 with every el in arr 2

//=== DOUBLER ===//

// What is the Big O of the following algorithm? Explain your answer
function doubleArrayValues(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] *= 2;
  }
  return array;
}

// Linear time: O(n) Algorithms with linear time complexity (O(n)) have running times that are
//directly proportional to the size (n) of the input
// function takes an array, multiplies every element of array by 2, then returns array with doubled values.
// Another way to think of it is that since it is one loop it's also O(n^1).

// === NAIVE SEARCH ===//

// What is the Big O of the following algorithm? Explain your answer
function naiveSearch(array, item) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      return i;
    }
  }
}

// Linear time: O(n) Algorithms with linear time complexity (O(n)) have running times that are
//directly proportional to the size (n) of the input
// Worst case will always be that the amount of operations

// === CREATING PAIRS ===//

// What is the Big O of the following algorithm? Explain your answer
function createPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.log(arr[i] + ", " + arr[j]);
    }
  }
}

// Polynomial O(n^k). The function creates unique pairs that do not duplicate, and follows the equation n^2.
//  it has two loops which increases time exponentially

// === COMPUTE THE SEQUENCE ===//
// What is the Big O of the following algorithm? Explain your answer

function compute(num) {
  let result = [];
  for (let i = 1; i <= num; i++) {
    if (i === 1) {
      result.push(0);
    } else if (i === 2) {
      result.push(1);
    } else {
      result.push(result[i - 2] + result[i - 3]);
    }
  }
  return result;
}

// Linear Time O(n): The bigger the number, the greater the iteration

// === AN EFFICIENT SEARCH ===//

// In this example, we return to the problem of searching using a more sophisticated approach than in naive search, above.
// Assume that the input array is always sorted.
// What is the Big O of the following algorithm? Explain your answer

function efficientSearch(array, item) {
  let minIndex = 0;
  let maxIndex = array.length - 1;
  let currentIndex;
  let currentElement;

  while (minIndex <= maxIndex) {
    currentIndex = Math.floor((minIndex + maxIndex) / 2);
    currentElement = array[currentIndex];

    if (currentElement < item) {
      minIndex = currentIndex + 1;
    } else if (currentElement > item) {
      maxIndex = currentIndex - 1;
    } else {
      return currentIndex;
    }
  }
  return -1;
}

// Logarithmic time O(log(n)): The function splits the input in half at each iteration.
// Each time through the while loop, we cut the size of the problem by half, so huge
// runtime does not increase by a whole lot although the size of the input may increases significantly

//=== RANDOM ELEMENT ===//

// What is the Big O of the following algorithm? Explain your answer
function findRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Constant Time O(1): No matter how large the array it will only take one pass to find a random item from the list.

//=== TOWER OF HANOI ===//

// The Tower of Hanoi is a very famous mathematical puzzle (some call it game!). This is how it goes:
// There are three rods and a number of disks of different sizes which can slide onto any rod.
// The puzzle starts with the disks neatly stacked in ascending order of size on one rod,
// the smallest disk at the top (making a conical shape). The other two rods are empty to begin with.
// The goal of the puzzle is to move the entire stack of rods to another rod
// (can't be the original rod where it was stacked before) where it will be stacked in the ascending order as well.
// This should be done obeying the following rules: i) Only one disk may be moved at a time ii) Each move consists of
// taking the upper disk from one of the rods and sliding it onto another rod, on top of the other disks that may already
// be present on that rod. iii) A larger disk may not placed on top of a smaller disk
// Input:
// Rod ARod BRod C--------------------------
// Output:
// Rod ARod BRod C--------------------------
// Derive an algorithm to solve the Tower of Hanoi puzzle.
// Implement your algorithm using recursion. Your program should display each movement of the disk from one rod to another.
// If you are given 5 disks, how do the rods look like after 7 recursive calls?
// How many moves are needed to complete the puzzle with 3 disks? with 4 disks? with 5 disks?
// What is the runtime of your algorithm?
