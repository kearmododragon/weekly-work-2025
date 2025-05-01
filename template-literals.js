//Template Literals


//single quote string
let myString = 'This is my string'

//Double quote string
let myString2 = "This is my string"

//back-tick(tild) string
let myString3 = `This is my string`


const person = {
    firstName: "Joshua",
    lastName: "Smith",
    born: "10,000 years ago",
    note: "Time Wizard",
    age: 10004
}

// with template literals we can embed js expressions within a string

let result = `${person.firstName} ${person.lastName} was born ${person.born} and is a ${person.note}`

console.log(result)

// multi line strings can be done with the expression /n, or with TL's just use a line break. all white space (spaces, tabs etc) are honored withing ``

let result2 = `${person.firstName} ${person.lastName}. Line 1
He was born ${person.born} and is a ${person.note} Line 2` 
//console.log(result2)

let htmlTemplate =
  `
  <div class="panel">
    <div class="title">${person.firstName} ${person.lastName}</div>
    <div class="content">
      <p>Born: ${person.born}</p>
      <p>Note: ${person.note}</p>
    </div>
  </div>
  `;

//console.log(htmlTemplate)


function myTag(strings, personExp, ageExp) {
  const str0 = strings[0]; // "That "
  const str1 = strings[1]; // " is a "
  const str2 = strings[2]; // "."

  const ageStr = ageExp > 99999 ? "centenarian" : "youngster";

  // We can even return a string built using a template literal
  return `${str0}${personExp}${str1}${ageStr}${str2}`;
}

const output = myTag`That ${person.firstName} is a ${person.age}.`;

console.log(output);
