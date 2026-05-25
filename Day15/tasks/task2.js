// // 10. empty array using length
// const fruits = ['apple', 'banana', 'grapes', 'guava', 'litchi', 'watermeleon', 'kiwi', 'dragon-fruit', 'passion-fruit', 'ice-apple'];

// fruits.length = 0;
// console.log(fruits);


// // 11.
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 5) {
//         arr.length = 6;
//         break;
//     }
// }
// console.log(arr);



// // 12. empty array using splice method;
// const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// arr2.splice(0, arr2.length);
// console.log(arr2);


// // 13. Most efficient way to empty an array
// // arr.length = 0;

// // 14. concatinating two empty array
// console.log([].concat([]));


// 15.slice vs splice
// const array1 = [1, 2, 3, 4, 5];

// const array_slice = array1.slice(1, 3); // extracts elements from 1 to 2
// console.log(array_slice);
// console.log(array1);


// const fruits = ['apple', 'banana', 'grapes', 'guava', 'litchi', 'watermeleon', 'kiwi', 'dragon-fruit', 'passion-fruit', 'ice-apple'];

// const fruitsIncluding = fruits.filter((item) => {
//     return item.includes('ban')
// })

// console.log(fruitsIncluding);



// 17.
const items = ["A12", "B4", "A2", "C10", "B1", "A20", "C3"];

const sorted = [...items].sort();
console.log(sorted);


const items2 = ['a', 'b', , 'z', null, undefined];
console.log(items2.sort());

