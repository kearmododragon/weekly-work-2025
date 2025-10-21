function isEven(num) {
    return num % 2 == 0;
}

function divide(a,b){
    return a / b;
}

function isPositive(num){
    if(num > 0) return true
}

console.log(isEven(4)); // true
console.log(isEven(7)); // false
console.log (divide(10,5)) // 2
console.log(isPositive(1)) // true

module.exports={
    isEven,
    divide,
    isPositive
}