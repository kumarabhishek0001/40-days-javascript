# Javascript: Variables and Expressions

## Table of content

## Basic definations
- **Operator-** It is the symbol for the operation we are performing. Eg- addition operation (we use +), subtraction operation(we use -), Multiplication (we use *).

- **Operand-** The values on which the operation will be performed are called operands. (x+7) here x and 7 are the operand.

- **Expression-** The combination of operator and operand forms an expression
    *types of expression-*
    1. Assignment Expression - x = 3
    2. Evaluating Expression - x = 3 + 4

## Operator types

### Arithmatic Operator

1. Addition
2. Substraction
3. Multiplication 
4. Division
5. Exponenetial
```js
let a=4;
let b=2;

// 4 to the power 2(4^2);

const exp = a**b;
```

6. Reminder Operator(Modulo operator);

```js
let x = 5;
let y = 28;
console.log(y%x);
```

7. Post Increment Operator

Post- Baad me
increment - increase by 1

Pehle save karo fir increment karo.

```js
let num = 5;
let a = num++ // pehle save karo (5 save ho gya) fir increment karo (5+1 = 6)

// kyonki pehle save hua h to a me 5 stored h
console.log(a); //5

// save hone ke baad increment hua h toh num = 5 hoga
console.log(num) //6
```

8. Pre-Increment Operator

Pehle Increment Karo.
Fir Save Karo.

```js
let num2 = 10;
let b = ++num2;

// pehle increment hoga 
console.log(num2) //11

//fir value save hogi
console.log(b) //11
```


### Assignment Operator 
Assign values

**examples-**

```js
let x = 10;

x += 5; // x=x+5 (15)
console.log(x)

x -= 3; // x=x-3 (12)
console.log(x)

x *= 2; // x=x*2 (24)
console.log(x)

x /= 4; // x=x/2 (6)
console.log(x)
```

### Comparison Operator

**loose comparison**
The loose equality operator (==) performs type coercion before comparing values if the types are different.

type-coercion (badhyakarita, jor-jabardasti)

1. String to number

```js
console.log(Number('  ')); //0
console.log(Number('')); //0

// '', ' ' -> 0
```


2. Boolean to number

```js
console.log(Number(true)) // 1
console.log(Number(false)) // 2

// false -> 0 and true -> 1
```

3. special case

```js
null == undefined // true
```

for every other case in loose comparison null is not equal to anything.

'''js
console.log(null == 0);
console.log(undefined == 0);
'''

4. Object to primitive

```js
console.log([] == 0)
console.log([5] == 5)
console.log(['5'] == 5)
```


To avoid all this bullshit we use strict comparison

Here it is simple no type coercion. Data types remain what they are if Data type are not same false is returned


#### Bullshit of NaN
NaN -> Not a Number
Comparison of NaN with anything results in False if you see comparison of NaN with anything staright away false.

```js
console.log(NaN === NaN) // false

NaN < 5   //-> false
NaN > 5   //-> false
NaN <= 5  //-> false
NaN >= 5  //-> false

```


*So if you have to check, is some value is NaN, you cannot just (NaN === Values) use **isNaN()**.*

Now the working of isNaN is also another thing
-> It does type conversion of the given value to a number first. 

```js
Number('Hello') //-> NaN.
isNaN('Hello') //-> true.
```

```js
Number(''); // -> 0
Number(' '); // -> 0

isNaN('') // -> false
isNaN(' ') // -> false
```

```js
0/0 // -> NaN
```

#### Comparison of Objects

here we are not comparing the key values of the objects but we are comparing the address where obj1 and obj2 are stored since these are not refernce of the same memory location it result in false

```js
let obj1 = {
    'name': 'alice'
}

let obj2 = {
    'name' : 'alice'
}

console.log(obj1 === obj2)
```


but if two object refereces to the same memeory location then the result is true.

```js 
let obj = {
    'name': 'alice'
}

let obj1 = obj;
let obj2 = obj;

console.log(obj1 === obj2) // true
```

### Logical Operators

This has another load of bullshit
**Remember the place where ever js expects and boolean value and does not receive a boolean value it does type conversion or boolean coercion of that particular value**

**truthy flasy values**

falsy value -> the values that on type conversion to booleans gives a false

**values that return false. Only these**
false, 0, -0, 0n, "" (empty string), null, undefined, NaN.

truthy values -> Except the falsy above all are true.

<hr>

1. Logical And(&&)
return the first falsy, else the last truthy when both are truthy.

```js
console.log(true && true)
console.log(false && true)
console.log(true && false)
console.log(false && false)
```

```js
console.log(Boolean('Cow')) //true
console.log(Boolean('horse')) //true

console.log('cow' && 'horse'); // -> horse

// both are truthy hence returns late
```

```js
console.log(Boolean('Cow')) //true
console.log(Boolean('')) // true

console.log('' && 'horse') // -> ''

// returns first falsy.
```

2. Logical OR (||):
**Return the first truthy value, or the last value if all falsy**

3. Negate Operator (!):
**Reverses the boolean value. truth -> false, false -> true**

```js
console.log(!true);

// this is also a valid expression
console.log(!'cow')
```

5. Nullish Cohesion

If the first value is null or undefined then return second else return first.
```js
// nullish coalescing
// if the first can be converted to null or undefined return second else return fist

console.log(undefined ?? 'hello');
console.log(null ?? 'Hello')

console.log((0/0) ?? null);

// use can -> you can give a default value if somewhere result can be undefined or null
```


6. Condition Ternary Operator

**Syntax-**(condtion) ? statement executes if true : statement executes if false

ternary produce a value

```js

function eligible(Age){
    return (Age>20) ? true : false;
}
```



### Bitwise Operator

1. Bitwise and (&)
2. Bitwise or (|)
3. Bitwise xor (^)
4. Bitwise not (^)
5. Bitwise left shift
6. Bitwise right shift


### Relation operator 
*uses the keyword **in**.*
refer to objects module.
