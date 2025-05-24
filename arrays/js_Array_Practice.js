let books = [] // empty array named books
console.log(books)

books.push("The Shining") //Add The Shining to books
console.log(books, "add in")

books.unshift("Moby Dick") // Add Moby Dick to the front of books
console.log(books, " Add first")

console.log(books[1], " Second") // Console log the second element

books[0] = "Dune" 
console.log(books, " Replace") // Replace the second element with Dune

books.splice(1,0, "Great Ex")
console.log(books, " add GE betweet")

books.forEach(function(movie){
    console.log(movie, " all elements")
})
