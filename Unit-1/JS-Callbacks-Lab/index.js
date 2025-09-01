// Exercise 1

// A fellow student shows you this code.  When he runs it, he expects it to
// wait three seconds, then write "Ding!" to the console.  Instead, it writes
// "Ding!" immediately.  Find the bug and fix it.

function writeDing() {
  console.log('Ding!');
}

let timerId = setTimeout(writeDing, 3000);

// Exercise 2
const words = ['short', 'medium', 'delicious', 'nice', 'lengthy'];
// Filter the words array from above to create a new array
// named longWords that includes only the words with 7 or more
// characters

const longWords = words.filter((word) => word.length > 6);
console.log(longWords)

// Check that logging longWords outputs
// ["lengthy", "delicious"]

// Exercise 3

// Javascript arrays have a built-in sort method that can take
// a callback to tell it how to compare the things you want to sort.

// Research the array sort method.

// Write the sorting callback as a named function declaration

// Write the callback function to provide to the sort method so that
// the following code sorts the words from shortest to longest.


// The sort method sorts "in place", that is, it modifies the array
function compareWords(a,b) {
    return a.length-b.length // akes the value of the length and minus' them from each other, words.sort arranges them numerically
}
words.sort(compareWords);
console.log(words)

// Check that logging words now outputs
// ["nice", "short", "medium", "lengthy", "delicious"]

// Exercise 4

// Code a forEach method:
// 		1. Write a function named forEach.
//		2. The forEach function accepts two args, an array & a callback.
//		3. Code the forEach method such that it iterates over each element in the array arg (use a for loop).
//		4. For each iteration, invoke the callback arg, passing to it, the element and the index of the element.

// Test with this array
const colors = ['red', 'green', 'blue', 'purple'];
// and this callback
function log(elem, idx) {
  console.log(`Index: ${idx} / Element Value: ${elem}`);
}
function forEach (array, callback){
    for (let i = 0; i < array.length; i++){
        callback(array[i], i)
    } 
}
forEach(colors, log);
// calling forEach(colors, log) should resulting in this output:
// Index: 0 / Element Value: red
// Index: 1 / Element Value: green
// Index: 2 / Element Value: blue
// Index: 3 / Element Value: purple

// Exercise 5

function step1(cb) {
  setTimeout(function() {
    console.log('STEP 1 COMPLETE');
    cb()
  }, 750);
}

function step2(cb) {
  setTimeout(function() {
    console.log('STEP 2 COMPLETE');
    cb()
  }, 500);
}

function step3(cb) {
  setTimeout(function() {
    console.log('STEP 3 COMPLETE');
    cb()
  },250);
}

step1(function() {
    step2(function(){
        step3(function(){
            console.log("FINISHED")
        })
    })
})
/*
The above functions are working asynchronous functions - DO NOT
change any of their code. They are what we call "black boxes"
because we do not need to know anything that goes on inside of them.

Each of the three functions accept a single argument - a callback function.

Write the code that invokes the three functions such that the output in the console will be:

STEP 1 COMPLETE
STEP 2 COMPLETE
STEP 3 COMPLETE
FINISHED

Hints:
- Call `step1` first.
- You cannot call `step2` until after `step1` has "finished", similarly, you cannot call `step3` until `step2` has "finished".
- You must console.log the last line of the output, `FINISHED`, after `step3` has "finished".
*/

// ### Bonus

// Write function named `countdown` that accepts as an arg the starting number of seconds and console.logs the count down to zero one second apart from each other.
function countdown(num) {
    if (num < 0) return;          // stop when below 0
    console.log(`Count: ${num}`); // print current number
    setTimeout(function() {       // wait 1 second
        countdown(num - 1);       // call countdown with one less
    }, 1000);
}
countdown(3)
// For example:

// `countdown(3);`

// console.logs something like the following:

// ```
// Count: 3
// Count: 2
// Count: 1
// Count: 0

// ```