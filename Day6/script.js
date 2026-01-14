console.log('Day 6')

// function syntax
function printThis(){
    console.log('printing....');
}

printThis();

// function as expressing

const printMe = function(){
    console.log('Print Me')
}

printMe()

// parameters(a,b)-> while declaring or defining the function whatever input you put inside the function is called parameters
function sum1(a,b){
    const result = a+b;
    console.log(result);
}

// arguments -> the value while invoking the function is called an argument
sum1(1,10);

// whatif the value of the function above have to be some where used
// it cannot be stored anywhere until it is RETURNED.

function sum(a,b){
    const result = a + b;
    return result;
}

const sumResult = sum(10,4);
console.log(sumResult)

// now use this value anywhere
function double(x){
    return x*2;
}

console.log(double(sumResult));

// ------------------------ default parameters ---------------------
// sometimes not passing a parameter could cause a program to crash or behave unexpectedly

// lets say multiplication

function calc(num1,num2){
    const result = (2*(num1 + num2));
    return result; 
}

let ans = calc(10); // since num2 was never passed it was undefined. So that's why we get nan
console.log(ans); 

// so to make the program break a little bit gracefully we use default parameters

function calc1(num1=0, num2 = 0){
    const result = (2*(num1 + num2));
    return result;
}

let ans1 = calc1(10)
let ans2 = calc1()
console.log(ans1) // 20
console.log(ans2) // 0

// ----------------------------------- Rest Parameters ---------------------------------

// the rest is name that is generally used(...c/...d/...chai/...coffee)
// rest is to be always used at the end in the parameter list
function printNums(a,b,...rest){
    console.log(a,b,rest);
}

printNums(1,2,3,4,5,6,7,8,9,10);


// ----------------------------------- Nested Function ---------------------------------

function outer(){
    console.log('This is outer function');

    function inner(){
        console.log('this is inner');
    }
    inner()
}

// there is no existance of the function inner, outside the outer function
// this is true until we return the inner function
// if we return the inner function, it could be accessed outside the the outer function.

outer(); // this is the only way of calling the inner function
// the inner function lies inside the scode of outer function


function outer1(){
    console.log('This is outer function 1');

    return function inner1(){
        console.log('this is inner 1');
    }
    
}

let retfuncVar = outer1();
retfuncVar();

// ----------------------------------- callback Function ---------------------------------

function foo(func){
    console.log('foo');

    func();
}

// using nameless function
foo(function(){
    console.log('buzz');
})

// using named function 
const buz = function(){
    console.log('buzz');
}

foo(buz);


// let's say i want to call a particular function when somem condition is true
let connectionStength =9;

function doSomething(funct){
    if(connectionStength>8){
        funct()
    }
}

// now i can use this doSomething using anonymous function or using named function

doSomething(function(){
    console.log('Connecting to db.....');
});

const sendMessage = function(){
    console.log('send hellow');
}

doSomething(sendMessage);




// ----------------------------------- Pure Function ----------------------------------
// return or provides same output for same input.
function greeting(name){
    return "hello "+name;
}

console.log(greeting('abhi'));
console.log(greeting('nemo'));
console.log(greeting('abhi'));

// same input "abhi" gives same output

let greetingType = 'Hello ';

function sayHello(name){
    return greetingType + name;
}

console.log(sayHello('abhi'))
console.log(sayHello('nemo'))


greetingType = 'Namaste '

console.log(sayHello('abhi'))
console.log(sayHello('nemo'))

// -------------------------- Higher Order function ---------------------

function getCamera(camera){
    camera();
}

getCamera(function(){
    console.log('Sony')
})


// function that can return another function

function retrnFunction(){
    return function(){
        console.log('Hello')
    }
}

const retfunction = retrnFunction();
retfunction();


// ---------------------------------- Arrow Function ---------------------------------
let greetMe = (greetingMsg) =>{
    return greetingMsg + 'Me';
}


console.log(greetMe('Hola '))

// if arrow function is of 1 line only then, you can use this

let greetYou = (greetingMsg) => greetingMsg + ' You!'
console.log(greetYou('HOla'));

// !! how this behaves differently while using arrow function


// ---------------------------------- IFFE ---------------------------------
// Immediatly invoked function expression
// runs as soon as it is declared


(function(count){
    console.log('count:',count)
    // console.log(count)
})(1)


// --------------------------------- Call Stack ---------------------------

// --------------------------------- recursion ----------------------------

// function foo(){
//     foo();
// }

// Uncaught InternalError: too much recursion
// the number of function inside the call stack exceeds the limit.

// to avoid this error, what we need is a base condition which stops the recurssion


function count(start){
    if(start<=10){
        console.log(start)
        count(start+1);
    }
}

let start = 1;
count(start);