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
console.log(els)
// Append the <div>s to the end of the <body>
els.forEach(el => document.body.append(el));
