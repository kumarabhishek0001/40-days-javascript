// creating element
const pElm = document.createElement("p");
pElm.innerText = "This text is added dynamicly"
document.body.appendChild(pElm);

// ------------------------------------------------------------------------

// INSERTING ELEMENT
const span = document.createElement("span");
span.innerText = "I am span"

// insert before has to be called on the parent on which I am trying to insert element
// trying to insert span before pele so I have to call insertbefore on pelm parent
document.body.insertBefore(span, pElm);

// --------------------------------------------------------------------------
// insert a new pan between p and h1
const staticParaElement = document.querySelector('p');
const newSpan = document.createElement("span");

newSpan.innerText = "This is a new span that is inserted after h1";

document.body.insertBefore(newSpan, staticParaElement);

// ------------------------------- does query selector all select p added by dom ---------------------

const allPtag = document.querySelectorAll("p");
console.log(allPtag);

allPtag.forEach((element) => {
    console.log(element.innerText);
})