const countButtonHandler = document.getElementById("countBtn");

let count = 0;
function countHandler() {
    console.log("Count: ", count);
    count++;
}

function greet(name) {
    console.log(`Hello ${name}`);
}

function greetOuter() {
    greet("abhishek")
}

// ADDIGN LISTENERS
countButtonHandler.addEventListener("click", countHandler);
countButtonHandler.addEventListener("click", greetOuter);

countButtonHandler.removeEventListener("click", greetOuter);