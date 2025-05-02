// //const titleEl = document.getElementById("title")
// // console.log(titleEl)
// // const pE1 = document.querySelector(".cool")
// // console.log(pE1)

// //It helps to be as specific as you can using css selectors incase there's more than one h1 element (for example) and you need to select a specific one

// const secondH1 = document.querySelector('h1#unique-header')
// console.log(secondH1)
// // pE1.innerText ="I am now the text"
// // pE1.innerHTML=" Iam the <strong>NEW</strong> text"

// const pEl = document.querySelector('#unique-para')
// console.log(pEl)
// pEl.innertext = "we are changing the content"
// // pEL.innerHTML ="Hello" 

// // const titleEl = document.querySelector('h1.main-title')

// // titleEl.style.textAlign = "centre"

// // pE1.style.color = "red"

const pEl = document.querySelector('#unique-para')
console.log(pEl)
pEl.innerText = "we are <strong>changing</strong> the content" //strong wont work
//innerText only converts to string, innerHTML adds the html codes
pEl.innerHTML = "we are <strong>changing</strong> the content"

const titleEl = document.querySelector('h1.main-title')
console.log(titleEl)
titleEl.style.textAlign = "center"

pEl.style.color = "red"
console.log(titleEl.getAttribute('class'))
titleEl.setAttribute('id', "first-h1")
console.log(titleEl.hasAttribute('class'))
titleEl.classList.add("dom-practice")
titleEl.classList.remove("dom-practice")

const allListTags = document.querySelectorAll('li')
console.log(allListTags)

allListTags[0].innerHTML = "It's me, the <strong>first</strong> one"
allListTags[2].innerHTML = "<strong>Video paused at 02.25.33, end of this lesson</strong>"

for (let eachList of allListTags) {
    console.log(eachList)
    eachList.style.fontSize = "30px"
    eachList.style.textAlign = "center"
    eachList.style.color = "blue"
}