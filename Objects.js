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
//////////////////////////////////////////////////////////////////////////////////////////
const game ={
    // initialised object literal
    title: "Guess the Number!",
    biggestNum: 100,
    gameRunning: true,
    winner: null
}
// console.log(typeof game)
// console.log(game)

game.smallestNum = 0;
// console.log(game)

game.numGuesses = 0;
// console.log(game)

//both have make value = 1 (as value currently 0)
//game.smallestNum = 1;
game.smallestNum ++;

//add "!" to the end of the title
game.title += "!"
// console.log(game)

//Adds 10 to the smallestNum
game.smallestNum = game.smallestNum+10
// console.log(game)

// Can also use the string to access the property
game["smallestNum"] += 10
// console.log(game)

game.winner={ name: "Joseph"}
let identifier= "winner"
// console.log(game[identifier])

// game.play = function(){
//     console.log("My favourite number is: ",
//         Math.random()*100)
// }

function sayFavouriteNumber(){
        let favNum = Math.floor(Math.random()*100)
        console.log("My favourite number is: ", favNum)
}
game.play = sayFavouriteNumber
game.play()
console.log(game)
//////////////////////////////////////////////////////////////////////////////////////////
// const words = {
//     animals: ['fox', 'zebra', 'bear', 'turkey'],
//     colors: ['purple', 'orange', 'green'],
//     // ...other categories
//   };
  
// let selected = "animals"; // Imagine you have clicked on an "animals" tab and it brings up your list of animals
// const wordList1 = words[selected]
// console.log(wordList1)

// const wordList1 = words[selectedCategory];
// wordList1 -> [ 'fox', 'zebra', 'bear', 'turkey' ]
// const wordList2 = words.selectedCategory;
// wordList2 -> undefined as words.selectedCategory does not exist

// const catalog = {
//     "000001" : 39.99,
//     "000002" : 205.33
// }

// let sku;
// while (sku != "quit"){
//     sku = prompt("Enter sku number or 'quit' to exit") // prompts user to enter SKU or to quit
//     if (sku === 'quit') {
//         break;
//     } else {
//     if (sku) {
//         let price = catalog[sku]
//     console.log("The price of ${sku} is ${price}") // returns the price of the correct sku
//     } else {
//         console.log("Please enter a valid sku") // request you to input a valid sku 
//     }}
//      // if user types quit the prompt loop will exit
    
// }

