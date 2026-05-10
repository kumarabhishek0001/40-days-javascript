# Arrays

## Table of Content
- Part-1
    - Creating Arrays
    - Retrieving elements 
    - Inserting Elements
    - Removing element 
    - Making copy and clone
    - Destructuring
    - Rest parameters and Spread Parameters
- Part-2
- Part-3

**Array** is a collection of elements. In Js arrays can hold elements of different data type.

Each element has a position in arrays called the index

## Creating Arrays
1. Array litrals - Consist of elements separated by commas placed inside the square brackets

```JS
const vegetables = [🫑,🍅,🥒,🧅];
```

2. Array constructor function
```JS
const vegetables = new Array(🫑,🍅,🥒,🧅);
```

**Comparison in arrays is done by reference not by values. JS compares whether they point to the same location or not.**


## Retrieving Elements

1. Using Index

```JS
const index = 1;
const arr = [1,2,3,4,5];
const element = arr[index];
```


2. Using Loops

```JS
const arr = [1,2,3,4,5];
for(let i=0; i<arr.length; i++){
    console.log(`the value at index: ${i} is ${arr[index]}`);
};
```

## Inserting Elements
1. .push()
    - Inserts elements at the last of array
    - returns the length of updated array

```js
const arr = [1,2,3,4,5];
const pushReturn = arr.push(5)
console.log(`new array: `, arr);
console.log(pushReturn)
```

2. .Unishift()
    - Inserts elements at the last of array.
    - returns the length of updated array.

```js
const arr = [1,2,3,4,5];
const pushReturn = arr.unshift(6);
console.log(`new array: `, arr);
console.log(pushReturn)
```

## Copy/Clone array

```js
const arr = [1,2,3,4,5];
const sameRefCopy = arr;
```

Although sameRef is a copy of arr, they share the same reference, changing eirther results in change of other.

```js
const arrCopy = arr.slice();
```

**.splice()** lets you make clone of the original array **arrCopy** is completely different instance of **arr**

```js
console.log(arr === sameRefCopy) //true
console.log(arr === arrCopy) //false
```

**arr === sameRefCopy** - pointing to same memory location
**arr === arrCopy** - completely different instance

## Check if Value is array or Not

**Array.isArray(arr)**

## Array Desctructuring
Say there are lots of element in array and I want extract them I can do this my making a varible and assigning it it's value by fetching the element using index.

Not this is good if there are say 2-4 values it becomes tedious to keep tracck of index as the number of elements grow.

We use destructuring

```js
const vegetables = ['🍅','🫑','🥬','🧅'];

const [tomato, capsicum, lettuce, onion ] = vegetables;

console.log(tomato, capsicum, lettuce, onion)
```

### Default value in desctructuring

```JS
const vegetables = ['🍅']
const [tomato, capsicum] = vegetables;
```
capsicum in undefined, as the array only contains the single element.

default values let us make defaults in case the value is not provided default value is assigned if the value is provided in array the elements is assigned

```js
const [tomato, capsicum='🫑'] = vegetables;
```

### Skipping values
We need to destructure but also want to skip an element of the array.
```js
const vegetables = ['🍅', '🧅', '🫑'];

const [tomato, ,capsicum] = vegetables;
```

### Nested array Desctructuring 
- try to avoid, it complex and can cause error

Usual method
```js
const food = ['🍅', '🧅', '🫑', ['🍇','🍈','🍉']];

const fruits = food[3]
console.log(fruits);

const grapes = fruits[0];
console.log(grapes);
```

**Desctructuring**
```js
const [,,,[,mustMelon]] = food
console.log(mustMelon);
```


### Applications of Desctructuring
1. Swapping
```js
let first = 1;
let second = 2;

[second, first] = [first, second];

console.log(first, second);
```

## Rest Params VS Spread Params
- Rest params goes with the variable
- Spread params goes with the actual array.

**Reset Parameters**
```js
const [one, two, ...rest] = [1,2,3,4,5,6];
console.log(one); // 1
console.log(two); // 2
console.log(rest); // [3,4,5,6] 
```

**Spread Parameters**
- Used for making clones

```js
const arr = [1,2,3,4];
const arrClone = [...arr];

arr[1] = 25;
console.log(arr);
console.log(arrClone);
```



### Application of spread
1. Merge Two Arrays

```js
const array1 = [1,2,3];
const array2 = [4,5,6];

const mergedArray = [...array1, ...array2];
console.log(mergedArray)
```

## Length Property
**.length** - Gives the length of the array.
**Max Size of Array** (2^32) - 1;

```js
const array1 = [11, 21, 31];
array1.length = 2
console.log(array1);
```

This reduces the size of array from 3 -> 2.
Thus the array changes to [11,21].

Can also increase the space. The non filled spaces are empty
