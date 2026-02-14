"use strict"
// when not in strict mode, 'this' keyword inside a stand alone function refers always to window object

// when in string mode, 'this' keyword inside a standalong function is always undefined
function sayHello(){
    console.log('This points to:',this); // this here refers to the window object
}

// sayHello()


function outer(a){
    console.log('This is outer function:',this); // here also this refers to window object

    return function inner(b){
        console.log('This is inner fucntion:',this);// this here also refers to the window object
    }
}

const outerResult = outer(12);
outerResult(8);