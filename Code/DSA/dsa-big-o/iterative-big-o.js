// COUNTING SHEEP //

function countSheepLoop(num) {
  for (let i = num; i > 0; i--) {
    console.log(`counting sheeps ${i}`);
  }
}

// big O for this function is linear (O(n)) because amounts of operations directly correlates to
// value of input num which determines duration of for loop

// DOUBLER //

function double_all(arr) {
  var ret = Array(arr.length);
  for (var i = 0; i < arr.length; ++i) {
    ret[i] = arr[i] * 2;
  }
  return ret;
}
let arr = [10, 4, 5, 2, 1];

// big O for this function is linear because amount of operations directly correlates to length
// of the input array which determines duration of for loop. O(n).

// REVERSE STRING //

function reverse_tail(str) {
  var accumulator = "";
  while (str !== "") {
    accumulator = str[0] + accumulator;
    str = str.slice(1);
  }
  return accumulator;
}

// big O for this function is linear because amount of operations directly correlates to length
// of the input string which determines duration of while loop. O(n).

// NTH TRIANGULAR NUMBER //

function triangle(n) {
  var tot = 0;
  for (var i = 1; i <= n; ++i) {
    tot += n;
  }
  return tot;
}

// big O for this function is linear because amount of operations within for loop directly correlates
// to value of the input n, where n defines upper limit of for loop. O(n).

// SPLIT STRING //

function split(str, sep) {
  var ret = [];
  while (true) {
    var idx = str.indexOf(sep);
    if (idx == -1) break;
    ret.push(str.slice(0, idx));
    str = str.slice(idx + sep.length);
  }
  ret.push(str);
  return ret;
}

// big O for this function is linear because amount of operations depends of the amount of separators present in input string.
// O(n)

// BINARY //

function convertToBinaryIter(num) {
  var binary = "";
  while (num > 0) {
    let rem = Math.floor(num % 2);
    binary = rem + binary;
    num = Math.floor(num / 2);
  }
  return binary;
}

// big O for this function is linear because amount of operations directly relates to the value of the input num.
// The block of code within the while loop will run as many times as it takes for num to be gradually reduced down to 0.
// O(n)

// FACTORIAL //

function factorialIterative(number) {
  let fact = 1;
  for (let i = 1; i <= number; i++) {
    fact *= i;
  }
  return fact;
}

// Factorial iterative function is linear, for loop operation will only run as many times as input number equates to
// O(n)

// FIBONACCI //

function fibonacciIterative(number) {
  let num1 = 1;
  let num2 = 0;
  let fib = null;
  while (number > 0) {
    fib = num1;
    num1 = num1 + num2;
    num2 = fib;
    number--;
  }
  return num2;
}

// Fibonacci iterative function is linear, because operations within while loop will only be performed
// as many times as = input number value. O(n)
