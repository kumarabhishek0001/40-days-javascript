// next sibling
// <p>
// <span>

// span is the next sibling to p

const pElm = document.querySelector("p");
console.log(pElm);

const heading2 = document.createElement('h2');
heading2.innerText = "This is a heading";


console.log(pElm.nextElementSibling);


document.body.insertBefore(heading2, pElm.nextElementSibling);