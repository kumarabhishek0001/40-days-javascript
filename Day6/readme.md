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