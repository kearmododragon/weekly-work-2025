//Prompts will follow in sequence, top to bottom
//let name = prompt('Enter your name')
//let city = prompt('What city do you live in?')


//Branching
// code will follow paths and will branch to different options when needed
//points = 110
//if (points > 100){
//    console.log('congratulations!');
//} else {
//    console.log('keep playing')
//}

//Looping
// will continue to run through code until completed, player has their go until hitting 100 points 

//while (points < 100) {
//    let move = getPlayerMove();
//   points += getPoints(move);
//}

//Conditional expressions
// evaluates to a single value. true or false.
// (word === secretWord)
// (numWrongGuesses > MAX_WRONG_GUESSES)
// (winner)

//if (false) {
//    console.log('truthy!');
//  } else {
//    console.log('falsy!');
//  }
// Everything in JS is truthy except for the following six things:

//1. `false` (of course)
//2. The `null` data type
//3. The `undefined` data type
//4. The empty string `''`
//5. The number `0` (zero)
//6. `NaN` (special number)

// NOT operator
// ! flips everything from "true" to "False"
// !false === true
// !null === true
// !3 === false

// !! Would force the console to read true (i.e. !!3 === true [not 3])


// When comparing left to right, the following  operators work:
// ===  Strict equality (same as / 10 === 10)
// ==   Type conversion (not recomended)
// !=== Strict inequality (not eaqual to / 10 !== 1)
// <    Less than
// >    Greater than
// <=   Less than or equal to
// >=   Greater than or equal to

// || or && operators
// || works as or. 
// if (num < 1 || num >10) Then the number is not between 1 and 10
// It will also return the first option if truthy, otherwise second option
// 0 || null  Will return null

// && works as and
// if (num > 1 && < 10 ) Then the number IS between 1 and 10
// && returns the first option if falsy, otherwise returns second option
// 0 && null Will return 0

// If statements 
// Works to say if X happens then Y happens.

// Single path IF statement
//let num = "7"
//if (num === "7"){
//    console.log("Your number is 7")
//}

// Can be shortened to
// if (num === "7") console.log("Your number is 7")

 // If Else (dual path) statements 
 // If X is true, do Y, otherwise do Z
 // if (winner) {
 // console.log("Game has been won");
 //} else {
 // console.log("Keep playing")
 //}


 // If else if statement (3 + paths)
 // add an else if statement for unlimited possibilities

// if (guessNum < secretNum){
//   console.log("guess higher");
//} else if (guessNum > secretNum){
//    console.log("guess lower");
//} else {
//    console.log("Good guess! You got it!")
//}
// The final ELSE is not mandatory and can be skipped
//let colour = "green"
//if (colour === "green"){
//    console.log("Go");
//} else if (colour === "yellow"){
//    console.log("Slow");
//} else if (colour === "red"){
//    console.log("STOP");
//} else console.log("Whatever")

// For Looping
//For loops run blocks of code for a certain number of times.
//let upTo = prompt("Iterate from one to ?");
//upTo = parseInt(upTo);
//for (let n = 1; n <= upTo; n++){
//    console.log("current number: ", n);
//}

// This will prompt you and ask for a number. Whatever you type, the code will count from on to that number. 
// n = 1 (starting point) n <= upTo (number is less than or equal to the guess), n++ (add 1 to n)
//      INITIALIZER             CONDITION                                           ACTION

// Looping while statement
// Use while loop when the number of iterations is unknown
// while (score = <x)
// do something 


// 1. Generate a random secret number
//const MAX_NUM = 100
//const secretNumber = Math.floor(Math.random() * MAX_NUM) +1;
// 2. Declare a variable to hold the player's guess
//let playerGuess
// 3. Loop while the player's guess is not correct
//while (playerGuess !== secretNumber);
  // 3.1. Prompt for the player's guess
//playerGuess = prompt("Guess a number please: ");
  // 3.2. Convert the player's input into a number
//playerGuess = parseInt(playerGuess)
  // 3.3. If the guess is lower or higher than the secret number, print a message that informs the player as such
//if (playerGuess < secretNumber){
//    console.log("HIGHER")
//} else if (playerGuess > secretNumber){
//    console.log("LOWER")
//} else {console.log("Well done!")
//}

// 4. Print a message congratulating the player