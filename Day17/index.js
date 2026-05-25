// DOM is basically an api that let's languages like js to interact with it
// DOM types - 

// 1. Document - Represents the enitire page and it is the root node of the DOM tree.
console.log(document)
// 2. Node Element - generic term for any element in the dom tree. Element Node, Text Node, attribute node.


// 3. Element - A specific type of node that represent HTML tags/elements

// 4. Node list - An array of node

// 5. Attribute - represents the attrubute of a node

// 6. NameNodeMap - collection of attribute



// ACCESSING DOM
let titleElem = document.getElementById('heading');
console.log(titleElem);

let infoElem = document.getElementsByClassName('info')
// console.log(infoElem[0])

Array.from(infoElem).forEach(element => {
    console.log(element)
});


const pTagElms = document.getElementsByTagName("p");
console.log(pTagElms);




// QUERY SELECTOR AND QUERY SELECTOR ALL
const querySelector = document.querySelector("p.info");
console.log('query selector(p.info): ', querySelector);

const querySelectorAll = document.querySelectorAll('p');
console.log('query selector all(p): ', querySelectorAll);
// query selector all returns a node list
// get element by ID returns an HTMLCollection


// query selector for id
const querySelectorID = document.querySelector("#heading");
console.log(querySelectorID);