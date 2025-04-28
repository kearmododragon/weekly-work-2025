// What are objects
// An Object in JS is an instance of data. It contains a collection of properties seperated by a comma. 

// Below is an object with 3 properties
//{
//    name: "Maria",
//    birthDate: new Date (2000, 3, 15),
//    numSiblings: 2,
//}

// name = KEY (string or symbol defining the data)
// "Maria" = VALUE (any expression that gives value to the key)

const game ={
    // initialised object literal
    title: "Guess the Number!",
    biggestNum: 100,
    gameRunning: true,
}
console.log(typeof game)
console.log(game)

game.smallestNum = 0;
console.log(game)

game.numGuesses = 0;
console.log(game)

//both have make value = 1 (as value currently 0)
//game.smallestNum = 1;
game.smallestNum ++;

//add "!" to the end of the title
game.title += "!"
console.log(game)

//Adds 10 to the smallestNum
game.smallestNum = game.smallestNum+10
console.log(game)