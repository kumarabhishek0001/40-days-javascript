// removing elements in DOM
const list = document.getElementById("myList");

// removing children
const itemToRemove = list.children[0];
// list.removeChild(itemToRemove);

// remove when know id
const removeMe = document.getElementById('removeMe');
removeMe.remove();

// removing everything
// list.innerText = ""

// method-2 removing everyhting
// list.replaceChildren("");

// const test = document.getElementsByTagName("p")[0];
// list.replaceChildren(test);