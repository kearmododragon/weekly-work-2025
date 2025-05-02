console.log("JS Loaded")

const btn = document.querySelector('button')
const input = document.querySelector('input')
const list = document.querySelector("ul")
console.log(btn, input)



//btn - stores dom node in an element called "button"
// if btn returned null, can't add event listener

function handleButtonClick(evt) {
    console.log(evt)
    const color = ["red", "blue", "yellow", "green", "orange", "black",]
    const randomColor = Math.floor(Math.random() * color.length)
    evt.target.style.backgroundColor = color[randomColor]
    evt.target.style.Color = color[randomColor]
}

function changeCommentBG(evt){
    console.log("evt", evt.target.textContent)
    // evt.target.style.backgroundColor ="red"
}

function handleAddComment(evt) {
    // event object - evt - access information about the node that triggered the event
    //console.log(evt)
    // 1. create new node (li)
    const newCommentEl = document.createElement('li');

    // 2. capture the information out of a cached input
    //console.log(input.value)
    // 3. access the value attibute of the input
    const commentText = input.value
    // 4. set the text content of our list item to match input
    newCommentEl.textContent = commentText
    newCommentEl.addEventListener("click", changeCommentBG)
    newCommentEl.addEventListener("click", handleButtonClick)
    console.log(newCommentEl)
    // 5. append the list to a dom node (ul)
    list.appendChild(newCommentEl)
    input.value = ""
}
btn.addEventListener("click", handleAddComment,)
list.addEventListener("click", changeCommentBG)

/**
 * listener methon - argument "click"
    listener method - argument function()
    function (callback) - provide an argument (event object)
    event object - provided every event and may contain many properties
 */

    // Goal - change the background colour of item that's clicked

    // access the element
    // add event listener 
    // define the listener