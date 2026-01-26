# Hoisting
The identifier is registered in the memory during the creation phase.

```js
console.log('My name is', student_name);
var student_name;
student_name = 'abhishek';

console.log('My name is',student_name)
```

In the code above the identifier student_name is registered in the memory with a data type **undefined** during creation phase of global execution context.

Here the student_name is registered in the memory and initialized as undefined in the creation phase and during execution phase the first console gives the following result:

```
My name is undefined
```

This concept is limited to var, you can see the effect or say side effect only when using var.
**Why side effect?** Because it can easily introduce bug as variables can be given in last or the file while they could be used above causing unpredictable behaviour.

## Hoisting with let

Now when using let hoisting does happen but it throws an error.
When we declare using let the variable is not initialized with anything. **Since it is only registered in the memory and not initialized it can not be used.**

**Error:**
```
Uncaught ReferenceError: can't access lexical declaration 'student_name' before initialization
```

## Hoisting with const

white declaring const it is mandatory to initialize it with a value also 

```js
const num;
num = 1;
```


```
Uncaught SyntaxError: missing = in const declaration
```

now even if we do 

```js
console.log('My name is', student_name);
const student_name = 'abhishek';


console.log('My name is',student_name)
```

```
Uncaught ReferenceError: can't access lexical declaration 'student_name' before initialization
```


## Temporal Dead Zone
**An area where you cannot access the variable until it is initialized.**

In the creation phase, let and const bindings are created but left uninitialized(in temporal dead zone)

If they are accessed before their initialization during the execution phase, a refrence error is thrown.

You cannot access a variable until it is initialized


```js
// ====== student_name, address variable's TDZ start here. ======
//
//
//
console.log(student_name); //reference-error

console.log(address); //reference error
const address = 'banglore' //address variable's TDZ ends here.
// 
// 
// 
// 
let  student_name = 'abhishek' //name variable's TDZ ends here.

// student name cannot be access in the above area
// after TDZ ending it can be 

```


## Function Hoisting

```js

sayHello();

function sayHello(){
    console.log('Hello World!')
}
```

Now again here lets get into gec in the creation phase the function is stored whole in a memory location. Now during exection phase sayHello is invoked and we already have sayHello() body stored in memory so it is executed smoothly.

## Twist

```js

sayHello();

var sayHello = function(){
    console.log('Hello World!')
}


```
Going back to the GEC again first var is allocated a memory location and then initialized with undefined. **Now in execution phase again when sayHello is execuded it does not know about the thing that sayHello is function it iterprets it like undefined() since we stored sayHello() as undefined**.

then when it encounters var below then it see that var is actually a function but since JS runs line by line and after error no line is executed. 


 