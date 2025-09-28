// Exercise 2

// Javascript arrays have a built-in sort method that can take
// a callback to tell it how to compare the things you want to sort.

// Research the array sort method.

// Write the sorting callback as a named function declaration

// Write the callback function to provide to the sort method so that
// the following code sorts the words from shortest to longest.

const words = ['short', 'medium', 'delicious', 'nice', 'lengthy'];

// The sort method sorts "in place", that is, it modifies the array
words.sort(sortbylength);
function sortbylength(a, b) {
  return a.length - b.length
}
console.log(words)
// Check that logging words now outputs
// ["nice", "short", "medium", "lengthy", "delicious"]
