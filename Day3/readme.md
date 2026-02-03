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