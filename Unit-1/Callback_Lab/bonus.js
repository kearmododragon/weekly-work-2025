// Write function named `countdown` that accepts as an arg the starting number of seconds and console.logs the count down to zero one second apart from each other.

// For example:

// `countdown(3);`

// console.logs something like the following:

/*
Count: 3
Count: 2
Count: 1
Count: 0
*/

function countdown(seconds){
    let current = seconds;

    const timer = setInterval(function() {
        console.log("Count: ", current);
        if (current === 0){
            clearInterval(timer)
        }
        current --;
    }, 1000);
}

countdown(3)