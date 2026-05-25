// EVENT -> singnal that something has happened/changed in the browser.

function handleClick(greeting) {
    console.log(`${greeting} Button clicked`)
}

const myBtnElem = document.getElementById("myBtn2");

// ----------------------------------------

myBtnElem.onclick = function () {
    console.log("My btn 2 clicked")
}

// this over-writes the above function
// what if i want my button to execute 2 functions
// we use even listeners
myBtnElem.onclick = function () {
    console.log("My btn 2 clicked overwrite")
}

// ----------------------------------------
// also this could be done
// definig function else-where 
// keep in my not to do handleClick() -> this will execute handleClick();
myBtnElem.onclick = handleClick;

// but what if you want to pass an argument

myBtnElem.onclick = function () {
    handleClick("Hola,")
}

// could this using arrow function also
