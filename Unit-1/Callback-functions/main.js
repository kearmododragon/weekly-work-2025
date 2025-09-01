// console.log("Callbacks")
// const colors = ['red', 'green', 'blue'];

// colors.forEach(function(color, index) {
//     console.log(`${index} - ${color}`)
// })

// const pets = [
//     {name: "Luna", type: "dog" }, 
//     {name: "Nina", type: "dog"},
//     {name:"Soba", type:"dog"},
//     {name: "Malani", type: "cat"},
//     {name: "steven", type: "Rat"}
// ]
// pets.forEach(cb)

// function cb(element, idx){
//     let message = "Hello I am a pet";
//     if(element.type == "dog"){
//         message = `Hi, I am ${element.name}, Bark Bark`;
//     } else if(element.type == "cat"){
//         message = `Hi, I am ${element.name}, meow.`;
//     }
//     console.log(message);
// }

// const dogs = pets.filter((pet, idx) =>{
//     //signature for filter method
//     // filter has some conditional behaviours
//     // filter expected a return of a boolean value
//     // when filter runs if the conditional expression evaluates to true
//     // that data is stored in a new array
//     // otherwise it is skipped
//     if(pet.type === "dog"){
//         return true
//     } else {
//         return false
//     }
// })

// console.log(dogs)
// console.log(pets)

// const notDogs = pets.filter((pet) => pet.type !== "dog")
// console.log(notDogs)


const cars = [
  { make: 'Toyota', yrsOld: 5, mileage: 92399 },
  { make: 'Ford', yrsOld: 12, mileage: 255005 },
  { make: 'Ferrari', yrsOld: 9, mileage: 12966 },
  { make: 'Subaru', yrsOld: 9, mileage: 111266 },
  { make: 'Toyota', yrsOld: 2, mileage: 41888 },
  { make: 'Tesla', yrsOld: 3, mileage: 57720 }
];

// Use filter method to "select" the objects within the [cars] array that have been driven more than 20,000 miles per year
// store the new array returned by cars.filter... in a variable named wellDrivenCars
// you may use either an anonymous or named function as the callback function provided to the filter method
// finally use the forEach method on the wellDrivenCars array to console.log each "car" object

const mileageCheck = function(car){
    let annualMileage = car.mileage / car.yrsOld
    console.log(annualMileage)
    return annualMileage > 20000
}
const wellDrivenCars = cars.filter(mileageCheck)
console.log(wellDrivenCars)


// const colors = ['red', 'green', 'blue'];

// console.log('Code BEFORE the forEach...');

// colors.forEach(function(color, idx) {
//   console.log(`${idx + 1} - ${color}`);
// });

// console.log('Code AFTER the forEach...');


const colors = ['red', 'green', 'blue'];

console.log('Code BEFORE the forEach...');

// setTimeout accepts a callback & how long to wait before calling the cb
setTimeout(function() {
  colors.forEach(function(color, idx) {
    console.log(`${idx + 1} - ${color}`);
  });
}, 10000);  // 1000 milliseconds (1 sec)

console.log('Code AFTER the forEach...');