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

