// traversing DOM
// parent element - represnets html element
// parent node - everything that is attached to the dom

// const span = document.getElementById("text");

// console.log("parent element: ", span.parentElement);
// console.log("parent element: ", span.parentNode);


// console.log("grand parent element: ", span.parentElement.parentElement);
// console.log("grand parent element: ", span.parentNode.parentNode);


// ----------------------------------------------------------------------
// children vs childnodes
// htmlcollection | node list

// const mainElement = document.getElementById('main-id');

// console.log('children element: ', mainElement.children);
// console.log('children node: ', mainElement.childNodes);


// -----------------------------------------

const mainElement = document.getElementById("main-id");

// first child node/element


// node is all the part of dom comment is also a node
// while element is the html element

console.log("First child: ", mainElement.firstChild);
console.log("First child: ", mainElement.firstElementChild);


// ------------------------------ Siblings ----------------------

console.log("First child: ", mainElement.nextElementSibling);
console.log("First child: ", mainElement.nextSibling);