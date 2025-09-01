// const friends = ["Melissa", "Marc", "Andrew", "Nick"];

// friends.forEach(function(friend) {
//   console.log(`I have a friend named ${friend}`);
// });

// // logs out "I have a friend named <friend's name>" for each friend


// //map

// const nums = [1,2,3]

// // const squared = nums.map((num) => {
// //     return num * num
// // })
// // console.log("This is squared: ", squared)
// // ONE LINER
// const squared = nums.map(num=> num*num)
// console.log("One Line: This is squared: ", squared)


const people = [
  {name: 'Fred', town: 'Bedrock'},
  {name: 'Susan', town: 'Miami'},
  {name: 'John', town: 'Arcadia'}
];

const els = people.map((person, idx) => {
  const el = document.createElement('div');
  el.innerHTML = `${person.name} <span>(${person.town})</span>`;
  // The new array will contain whatever
  // is returned from the callback
  return el;
});
// console.log(els)
// Append the <div>s to the end of the <body>
els.forEach(el => document.body.append(el));

const instructors = ["Alex", "Stephanie", "Daniel"];
const awesomeInstructors = instructors.map(eachInst => eachInst + " is awesome")
console.log(instructors)
console.log(awesomeInstructors)

const nums = [100, 2, 5, 42, 99];
const odds = nums.filter(num => num % 2)
const evens = nums.filter (num => num % 2 ===0)
console.log("odd numbers ", odds, " Even numbers ", evens)

const guys = ["jerks", "nice people", "jerks", "nice people", "nice people"];
const allJerks  = guys.filter(eachGuy => eachGuy === "jerks")
console.log(allJerks)


const cars = [
  {color: 'red', make: 'BMW', year: 2001},
  {color: 'white', make: 'Toyota', year: 2013},
  {color: 'black', make: 'Ford', year: 2014},
  {color: 'white', make: 'Tesla', year: 2016}
];

const firstWhiteCar = cars.find((car) => car.color === 'white');
// firstWhiteCar -> {color: 'white', make: 'Toyota', year: 2013}
console.log(cars)
console.log(firstWhiteCar)
const missingCar = cars.find((car) => car.color === 'blue');
// missingCar -> undefined
console.log(missingCar)

const idxFirstCarNewerThan2015 = cars.findIndex((car) => car.year > 2015);
console.log(idxFirstCarNewerThan2015)

const missingCarIdx = cars.findIndex((car) => car.year > 2009)
console.log(missingCarIdx)