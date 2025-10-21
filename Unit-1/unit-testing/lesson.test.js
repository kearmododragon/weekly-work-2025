// testing code from another file (main.js) so it doesn't clutter the actual code

const modules = require('./main')
// this imports the functions from main.js

const isEven = modules.isEven
const divide = modules.divide
const isPositive = modules.isPositive

//this is where all our test cases belong
test("It should return true when called with an even number", () =>{
    expect(isEven(4)).toBe(true)
})

test("It should return number a divided by number b",() =>{
    expect(typeof divide(10,5)).toBe("number")
})

test("Should return true if number > 0", () =>{
    expect(isPositive(1)).toBe(true)
})

//npm test  --- to run the tests