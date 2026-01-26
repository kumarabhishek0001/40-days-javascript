# Functions

## Basics

**Function Declaration**
```js
function printThis(){
    console.log('Hello Function!')
}
```
Created a function named *printThis* and stored normally in the memory.

**Invoking Function**
```js
printThis()
```
Running this calls the function named *printThis* and starts executing the code in the function body.

**Parameters**
While declaring or defining the function whatever you put as a variable inside the function is called function *parameter*

```js
//this function takes two number(parameters) and gives the sum as result
function sum(a,b){
    console.log(a+b);
}
```

Here a and b are parameters passed into the function.

Now what if a situation arises where i have to use the output of *sum* function. **The result must be returned by the function and shoud be stored in some variable.**

this can be achieved by using *return* keyword in the function.

```js
function sum(a,b){
    const result = a+b;
    return result;
}

const sumResult = sum(1,3)// result = 4
```

**arguments**
The value given as input to the array while invoking the functions

Sice the sum function is return some value. Now this value can be used in another function. This can be done directly by passing the function or buy storing the value returned by the function.


```js
function double(a){

    const result = 2*a;
    return result;

}

double(sum(1,3)) //2*(1+3) = 8
```

## Default parmeters
Programs fails badly if a certain argument is not passed. Let's say for multiplication function

```js
function calc(num1,num2){
    const result = (2*(num1 + num2));
    return result; 
}

let ans = calc(10); 
// since num2 was never passed it was undefined. So that's why we get nan
```

Program fails miserably since num2 is *undefined* here multiplication with 10 results in *Nan*.

What if we need it to fail gracefully like not something that completly shuts the application down.

Here we use default paramets

instead of keeping those values undefined we initialize them.

```js
function calc1(num1=0, num2 = 0){
    const result = (2*(num1 + num2));
    return result;
}

let ans1 = calc1(10)
let ans2 = calc1()
console.log(ans1) // 20
console.log(ans2) // 0
```

Here although the answers are not what the user will expect alteast this will not stop the functioning of other parts of the program.


## Rest Parameter
How many parametes can you make if your function need too many of them, 1,2,10 maybe 20 even. Here rest comes into use.

Rest parameter sotres all the arguments except those you explcitly declare while defining function.

```js
function printNums(a,b,c,...rest){
    console.log(a,b,c,rest);
}

printNums(1,2,3,4,5,6,7,8,9,10);
```

Here a,b,c are explicitly declared so they take individual values.
a=1, b=2, c=3 and rest stores all the other values except of a,b,c in an array called rest.

- Rest is the name of array storing all the elements. This could be any thing but industry standard is rest

- It can be used for storing multiple elements alone also. If any other parameters are not declared.

- It is always decalred at the end, never in the beginnig, if other variables are declared along with it

## Nested Function
This is just function inside another function

```js
function outer(){
    conose.log('This is outer function');

    function inner(){
        console.log('This is inner function');
    }

    inner();

}
```
the inner function lies inside the scope of outer function so it does not exist or is not available outside the outer function.

So we have to invoke this function inside the outer function itself.

*Only way to make it available outside is when the outer function returns the inner function.*

```js
function outer(){
    conose.log('This is outer function');

    function inner(){
        console.log('This is inner function');
    }

    // return inner(); this will return and execute
    // we just want to return

    return inner;

}
```

## Callback function

A callback function is a type of function that is passed inside another function which then *'calls it back'* later often after completing it's own task.

```js
function foo(func){
    console.log('Hii, from foo');

    func();
}
```

The function called inside the function foo is a callback function. This executes when foo is done completing the code above *func()*.

### callback using anonymous function
```js
function foo(func){
    console.log('Hii, from foo');

    func();

foo(function(){
    conosle.log('Hello from callback function')
})
}
```

### callback using named function

```js
function foo(func){
    console.log('Hii, from foo');

    func();
}

const callbackfunc = function(){
    console.log('Hii, from callback!')
}

foo(callbackfunc);
```


**Example of callback**
```js
let signalStrength = 10

function startDoingSomething(func){
    console.log('Inside the function')

    if(signalStrength > 8.5){
        console.log('I am starting to:');
        func();
    }
}

function connectDB(){
    console.log('Connect to DB');
}

startDoingSomething(connectDB)

```


## Pure function
Provides the same output for the same input.

```js
function greeting(name){
    return 'Hello '+name;
}

console.log(greeting('abhi'));
console.log(greeting('nemo'));
console.log(greeting('abhi'));
```

this provides same output whenever the input is same. For same input 'Abhi' the output is same.


Imure function
```js
let greetingMsg = 'Hello '

function greeting(name){
    return greetingMSG + name;
}

console.log(greeting('abhi'));


greetingMsg = 'Hola! '
console.log(greeting('abhi'));

```
Now it is changed. There are very few pure functions in industry. **Here greetingMSG is called Side Effect**

**pure version**

```js
function greeting(greetingMsg, name) {
    return greetingMsg + name;
}
```


## High Order function(HOF)

Two condtions for hof(atleast 1 to be satisfied):
1. Takes function as argument 
2. Returns a Function


### Takes function as argument
```js
function getCamera(camera){
    camera();
}

getCamera(function(){
    console.log('Sony')
})
```

### Returns a Function
```JS
function retrnFunction(){
    return function(){
        console.log('Hello')
    }
}

const retfunction = retrnFunction();
retfunction();
```

## Arrow Function
```js
let greetMe = (greetingMessage) => {
    return greetingMessage + ", Sir!"
}

const result = greetMe('Hello')
console.log(result)
```

If you there is only a single statement inside the arrow function, the function body can be return with bracess and return keyword

```js
let greetMe = (greetingMessage) => greetingMessage + 'sir!'
```

**This** keyword behaves differently with arrow function.


## Immediatly Invoked Function Expression

```js
(function(count){
    console.log('count: ',count)
})(1)
```