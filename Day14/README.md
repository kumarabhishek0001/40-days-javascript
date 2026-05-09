# Error Handling
Process of detecting and managing errors so that the program does not crash unexpectedly.

**types of error**

1. Parsing/Syntax Error: found before execution
2. Runtime Error: happen during execution


## Parsing error

```js
console.log("Hello world"
```

SyntaxError: missing ) after argument list

## Runtime Error

```js
console.log(x)
```
ReferenceError: x is not defined

```js
const obj = null;

console.log(null.name)
```
TypeError: Cannot read properties of null (reading 'name')

```js
const arr = new Array(-1)
```
RangeError: Invalid array length


## try...Catch block
A try...catch block in JavaScript is used to handle runtime errors gracefully.

**example-1**
```js
try{
    console.log("Starting execution");
    console.log("ending execution");
    
}catch(error){
    console.log("Error while running the program", error);
}
```
Try block exectures the code if ther are no errors the catch block does not execute and program move forward

**example-2**
```js
try{
    console.log("Starting execution");
    console.log(abc);
    console.log("ending execution");

    
}catch(error){
    console.log("Error while running the program", error);
}
```
Here abc is not defined hence it throws an error

*output*
```
Starting execution

Error while running the program ReferenceError: abc is not defined
    at error_handling_01.js:3:17

```

Here abc was not defined hece the execution stops at the the line where I mentioned the abc and control shifts to the catch block


## Error Constructor Function
Error is a constructor function in JavaScript. We can use it to create **error objects**

Important properties of error objects
- error.name 
- error.message
- error.stack
- error. cause


*example*

```js
function divideNumber(num1, num2){
    try {
        if(num2 == 0){
            throw new Error("Cannot divide a number by zero", {cause: `Num2: ${num2}`})
        }

        const result = num1/num2; 
        console.log(`result: ${result}`)
    } catch (error) {
        console.error(error);
    }
}


divideNumber(10,0)
```


## Re-thow
Re-throw is done when you want to:
1. Handle/log the error locally.
2. But still let the outer code know something failed.


```js
function validateForm(formData){
    try{
        if(!formData.username) throw new Error("Cannot access property username");
        if(!formData.email.includes("@")) throw new Error("Invalid Email syntax");

        console.log("Form Validated", formData)
    }

    // This catch block:

    // logs the error inside validateForm
    // then sends the same error back to the caller
    catch(error){
        console.error(error)
        throw error //re-throw
    }
}

const formData1 = {
    user_name: 'jj123',
    email: "test@jj.com"
}

try{
    validateForm(formData1)
}catch(err){
    console.error(err)
}
```


Without rethrow the error gets swallowed in the function blocks
The called thinks that it's working well.

But when you rethrow it get's caught inside the catch block of caller


## Custom Error

```js
function ValidationError(message){
    this.name = "Validation Error"
    this.message = message
    this.stack = new Error().stack
}

ValidationErro.prototype = Object.create(Error.prototype)

function validateSeniorCitizen(age){
    if(age<60){
        throw new ValidationErro("Your are not a senior citizen");
    }
    console.log("You are a senior citizen");
}

try{
    validateSeniorCitizen(40)
}
catch(error){
    console.error(error.name);
    console.error(error.message);
}
```

**ValidationError** is a custom error. It is a constructor function with 2 main field name and message along with stack 

```ValidationErro.prototype = Object.create(Error.prototype)```
Is required for stack to work