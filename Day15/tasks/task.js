const arr1 = new Array(5);
console.log('Array with 5 elements', arr1);

const arr2 = new Array(3);
console.log('array with 3 empty slots: ', arr2);

const arr3 = [1, 2, 3, 4, 5, 6];
const arr3_el = arr3[arr3.length - 3];
console.log("4th element of array: ", arr3_el);

// 4. print element in the odd index

for (let i = 0; i < arr3.length; i++) {
    if (i % 2 !== 0) {
        console.log(`element at ${i}: ${arr3[i]}`);
    }
}

// 5. add element at front and end of the array
// add element to the end -> returns the last element
const end = arr3.push(7);
console.log(end);

// add element to the start -> returns the length of mutated array
const start = arr3.unshift(0);
console.log(start, arr3);


// 6. remove element from the front and end of the array;
const remove_end = arr3.pop(); //returns the removed value
console.log(arr3);
console.log(remove_end);

const remove_start = arr3.shift(); // returns the removed values
console.log(arr3);
console.log(remove_start);


// 7. create fruits array with 10 elements and extract 6 using destructuring
const fruits = ['apple', 'banana', 'grapes', 'guava', 'litchi', 'watermeleon', 'kiwi', 'dragon-fruit', 'passion-fruit', 'ice-apple'];
const [, , , , , six] = fruits;
console.log("six: ", six);


// 8. remove last 8 food items
const [first, second, ...rest] = fruits;
console.log('last 8: ', rest, rest.length);

// 9. clone an array
const copyFruits = fruits.slice();
console.log(copyFruits);

const [...copyFruits2] = fruits;
console.log(copyFruits2);


