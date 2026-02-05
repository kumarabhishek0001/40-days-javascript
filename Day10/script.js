// any variable declared using a var is added as a property to the window object of the browser. (window.name -> abhishek);
// this does not happend when using let or const.(window.name -> '');


let name = 'abhishek';

function greetings(){
    console.log("Hello,",name);
}

greetings();
console.log(name);

{
    console.log(name, 'inside the block')
}

// Function Scope: Variable declared inside a function are only.
// accessible within that function.



function toDo(){
    var task = "Learning 40 days of JS";
    console.log(task);
}

toDo();

// console.log(task) // task is defined inside function only, cannot be accessed as we have not defined it



// block scope: variables declared using let and const in side a block {} cannot be accessed outside the block
// Hence var and const are block scoped.

// However this is not the case with var. Variable declared using var can be accessed outside the block also.
// Hence it is function scoped
{
    var count = 10;
    console.log(count);

}
console.log(count);

// -------------------------------------------- Scope Chain-----------------------------------------
// - Js engine checks for variable if it is present in the current scope it fine if not it 
// keeps going one scope above to find the scope
// First the engine looks in it's scope only then goes a level above
// Nearest scope is given priority

// code - pending

var count = 10;
function outer(){
    var count = 20;

    function inner(){
        var count = 30;
        console.log(count); //inner() scope -> 30
    }

    inner();
    console.log(count); //outer() scope -> 20;
}

outer();
console.log(count); // global scope has count -> 10;


// ------------------------------------------ Variable Shadowing ----------------------------------

let message = "I am doing well.";

function howAreYou(){
    let message = "I am not doing well.";
    console.log(message);
}

howAreYou();
console.log(message);


// If the inner scope has the same variable name as the upper scope then the inner scope overshadows
// the outer scope or engine prioritize the variable nearest to the scope
