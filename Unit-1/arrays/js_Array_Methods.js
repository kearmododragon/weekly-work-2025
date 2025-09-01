// Arrays order lists of data (0+)

// 2 types of arrays
// literal Notation (best practice)
const nums1 = [2, 4, 18]

// Array class (less common)
const nums2 = new Array(2, 4, 18)

let movies = ["Fight Club", "Goldeneye", "Flow"]
//access the value of the first element and assign it "first movie"

let firstMovie = movies[0]

//change the 3rd movie
movies[2] = "Mickey 17" //changes the 3rd element in array

console.log(movies)

let lastMovie = movies[movies.length - 1]; //shows the last element in array

console.log(lastMovie)

movies.push("Jaws") // adds element to the end of array

console.log(movies)

movies.unshift("Star Wars", "Jurassic Park") // adds elements to beginning of array

console.log(movies)

let movie = movies.pop() // removes the last element 

console.log(movies)

movie = movies.shift() // removes the first element

console.log(movies)

let removedMovies = movies.splice(1,2) // removes 2 specific elements sat in place 1 & 2

console.log(movies)

removedMovies = movies.splice(1,0, "Spaceballs", "Alien") // adds 2 specific elements in the positions noted

console.log(movies)

removedMovies = movies.splice(0,2, "Best in show") // replaces elements in quoted position with the single element noted

console.log(movies)

removedMovies = movies.splice(2,3, "The Matrix", "Gladiator") // puts the quoted elements in the position mentioned, removing what was there (if anything)

console.log(movies)

movies.forEach(function(movie) {
    console.log(movie);
}); // logs each element in the array individually

movies.forEach(function(movie, idx){
    console.log(idx + ' - ' + movie);
}); // logs each element and their position within the array

for (let movie of movies) {
    if (movie === "The Matrix") break;
    console.log(movie);
} // this for loop will stop when it finds the quoted element

