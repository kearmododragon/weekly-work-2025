// // Three ways to define a function

// // 1) Function Declaration (AKA Function Definitions)
// function sayHello(name){
//     console.log("Hello " + name + "!")
// }

// // 2) Function Expression

// const sayHello = function(name) {
//     console.log ("Hello " + name + "!")
// }

// // Declerations are hoisted to the top of the code and are invoked immidiately.
// // Expressions are only invoked where they are written therefor only follow what came before them.


// fnDeclaration();  // thank you function declarations :)
// fnExpression();  // TypeError: fnExpression is not a function

// function fnDeclaration() {
//   console.log("I'm coming from a function declaration");
// }

// const fnExpression = function() {
//   console.log("I'm coming from a function expression");
// };


// // 3) Arrow functions 
// // essentially replace/trim previous functions but not always possible. 

// // Function Declaration
// function add(a, b) {
//     return a + b;
//   } 

//   // This code is a decleration. It's equivalent to the below arrow function

//   // Arrow Function
// const add = (a, b) => a + b;

// function getRandomInt (min, max) {
//  // generate random num between 0 - 0.99999999
//  const randomValue = Math.random()
//  console.log(randomValue)
//  // compute the "spread" (add 1 to make max inclusive)
//  const spread = max-min +1
//  console.log(spread, min, max)
//  // compute the random "range" (0.0 up to the spread)
//     const newValue = randomValue*spread + min
// // add minimum value range
// console.log(newValue)
// return Math.floor(newValue)    // removes decimals
// }

// getRandomInt(2, 5)

const planetHasWater = function (planet){
    const testPlannet = planet.toLowerCase()
    if( testPlannet === "earth" || testPlannet === "mars"){
        return true
    } else {
        return false
    }
}
// one parameter, planet, accepts string

//return "true" if the "planet" is Earth or Mars otherwise return false


console.log( planetHasWater('Earth') ) //=> true
console.log( planetHasWater('Venus') ) //=> false
// Test the bonus...
console.log( planetHasWater('mArS') ) //=> true
