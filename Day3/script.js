console.log("Day 3")


// operator -> to perform you need an operation we need operator(+, -, *, /)
// operand -> the value on which operation is applied on
// assignment expression -> x = 2 
// evaluating expression -> 3 + 4



// =========================== Operators type ===========================
// 1. arithmatic operators
let a = 10;
let b = 20;

console.log(a+b); // addition operator in case of string does concatination
console.log(a-b);
console.log(b-a);
console.log(a*b);
console.log(a/b);

let f_name = "alice";
let l_name = "jordan";

console.log(f_name+l_name);

// exponential operator
console.log(a**b);

// remainder operator
console.log(16%5)

// postincrement operator -> first return then implement
let count = 5;
console.log(count++); //count = count + 1
console.log(count);

// preincrement operator -> increases the value then return
console.log(++count);

// similarly you can do postincrement and predecrement operation

// ======================== Assignment Operators ===========================

console.log("-------------------- Assignment operator --------------------")


let x = 10;
x += 5; // x=x+5 (15)
console.log(x)
x -= 3; // x=x-3 (12)
console.log(x)

x *= 2; // x=x*2 (24)
console.log(x)
x /= 4; // x=x/2 (6)
console.log(x)

// ====================== Comparison operators ==============================

console.log("---------------- Comparison operator ----------------")
console.log(0 == 5); // don't use this !!!!!!!!, because see next example
console.log(0 == false); // this gives "true"

// (==) loosly equals operators -> converts the data into the nearest possible type.Imlicit conversion is done
// Js try to oversmart and try to convert them into similar type 

console.log(3 == "3") // this gives true again

// here strict equality is used

console.log(3 === '3'); // operand with different data types -> straight away false

console.log(null === null); // true
console.log(undefined === undefined); // true 

// !! if any operands is NaN(Not a Number) -> straing away false
console.log(NaN == 2)


// !! Important
let obj1 = {
    'name': 'alice'
}

let obj2 = {
    'name': 'alice'
}

console.log(obj1 === obj2) //not comparing name key
// obj 1 will have refernce of of address where obj1 data is stored;
// we are here comparing the memory address where obj1 and obj2 are stored

obj1 = obj2 // not obj1 and obj 2 are referencing the same memory address
// here the result of this operation is true
console.log(obj1 === obj2) // true


// Not equal (strict)
let obj3 = {
    'name': 'alice'
}

let obj4 = {
    'name': 'alice'
}

console.log(obj3 !== obj4)

// then there are the usuals
// a. greater than
// a. less than
// a. greter than equals 
// a. less than equals 


// =============================== Logical Operators ===============================
console.log("--------------- Logical opeator --------------- ")
// && || ?? !

// 1. logical AND
// if any operand is false then result is false

// if first operand can be converted to a false then first operand is the answer
// otherwise second operand
console.log(false && false) // false
console.log(true && false) // false
console.log(true && true) // true
console.log(false && true) // false

console.log("cow" && "horse") //cow cannot be converted to false -> horse
console.log(0 && "horse") // first can be converted to false (0->false) -> first is the answer (0)

// 2. logical OR
// if first can be converted to true then first is the answer

console.log("cow" || "horse") // cow is not something like empty string, 0 or some negative value, so cow is true
// since cow is true first true -> then first is answer


// 3. ! negate operator
console.log(!true)
console.log(Boolean("cow"))


// 4. nullish cohision
// op1 ?? op2
// if the first can be coverted or result into null or undefined, then return second
// else otherwise i.e retrun first

let a1 = null ?? 1;// 1
let a2 = undefined ?? 2; //2
let a3 = false ?? "tapascript"; // false
const a4 = 0 ?? "tapas" // 0;

// 5. conditional ternary operator
// condition 
// if condition satify ->first value
// otherwise -> another value

// condition ? val1 : val2

let age = 23;
console.log(age >=60 ? "Senior Citizen" : "Non senior citizen")


// ========================== Bitwise Operators ==========================

// & | ^ ~ << >>

// bitwise AND
console.log(15 & 9) // 1111 & 1001 -> 1001 (9)

// bitwise OR
console.log(15 | 9) //

// XOR -> return true if anyone is true
console.log(15 ^ 9) // 6


// left shift operator (<<)
console.log(1001 << 2)  //->100100 

// right shift operator (>>

// ======================== relational operator ============================
// keyword -> (in) will be used in objects


// ======================== grouping ============================
const p = 1;
const q = 2;
const r = 3;

console.log(p + q * r) //-> 1 + 6 = 7

console.log(p + (q * r)) //-> 1 + (2 * 3) = 7

console.log((p + q)*r) //-> (1 + 2) * 3 = 9

//  ======================== typeof ============================

const numbers = [1,2,3,4,5];
console.log(typeof(numbers)) //-> object

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
console.log(typeof(null)) //-> object //!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//  ======================== instaceof ============================
// check if object of a particular objecttypeS
