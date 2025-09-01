//Arrow-functions replace the need for normal functions unless for 'this' cases. must be written top down

/* function hellowWorld(str) {
    return `Hellow ${str}`
}

console.log (hellowWorld("World")) */


/* x => { ... }  // one parameter
() => { ... }  // no parameters
(x, y) => { ... }  // two or more parameters */

const hellowWorld = (str) => {
    return `Hello ${str}`
}
console.log(hellowWorld("howdy"))

const imp = () => ({animal: 'dolphin', swims: true})
console.log(imp())

function checkArgs() { console.log(arguments); }
/* checkArgs(1, 'abc') // outputs [1, "abc"] */

/* const checkArgs = () => console.log(arguments);
checkArgs(1, 'abc') // outputs Uncaught ReferenceError: arguments is not defined */

