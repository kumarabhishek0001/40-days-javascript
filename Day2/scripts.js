console.log('Welcome to day 2 of Js Series.')
// variable is just like a box, it is just a storage. We can storre anything in the box
// fruit inside a box
// box is varibale, we store a value in this box(variable).

// let/const variable_name = value
// specifier -> let/const

// specifier -> control the storage
// where and who can access the value it
// how many times you can put your value(mango) into the variable(box).

let fruit = "mango";

// -------------------------------------------------------------------------------
// value assignments
// using assignemnt operator (=)

fruit = "Kiwi" // value mango is wiped out and kiwi is put 
fruit = "mango"

let vegetable = "carrots";

// two variable names are used in assignment
// fruit = vegetable
// what value will be assigned will completly depend on the type of values in those variable

// ----------------- Two types of values ---------------------------
// 1. primitives -> pass by value. (Integer, string, boolean)
// 2. Non-primitives (build using primitives) -> pass by reference.


// pass by value.
// value in right will be assigened to storage box of the left.



//----------------- variable naming conventions ---------------------
// 1. name must have digits or alphabets
// 2. can have $ and _
// 3. first character must not be a digit.
// 4. No reserved keyword.
// 5. use camelCase.
// 6. human readable.
// 7. name should match the cause.

// --------------- 
// you should declare your variable once.
// you should be using multiple times.
// assigning can be also multiple times / none times depending on usecase.

// --------------------------- var ----------------------------

// function scoped.
// can be redeclared (not recommended).

var address = "delhi";
console.log(address);

console.log("----------");

var address = 'banglore'; // (not recommended)
console.log(address);

// --------------------------- let ----------------------------
// block scoped
// can be reassigned 
// cannont be redeclared

let city = "Delhi";
console.log(city);

// redeclaration
// let city = "Mumbai" this is invalid in let. This feature was inctoduce in ES6.


// reassignment
city = "Mumbai";
console.log(city);

// ------------------------ Const ----------------------------
// block scoped
// no redeclaration
// no reassignment

const destination = "udaipur";
console.log("Destination: ",destination);

// reassignment is invalid
// destination = "USA"

let name, salary, address;

// -------------------- Primitive data types ----------------- 

/*
1.string - text value (hello)
2.int - numeric values
3.boolean - true/false
4.undefined - a variable that is declared but not assigned
5.null- represents nothing
6.bigInt -large numners 
7.symbol - unique identifiers (symbol(id))
*/


// -------------------- Non Primitive data types ----------------- 
/*
1.object - key-value pair
2.array - order list of values
3.function - code that can be executed
*/

// object
let student = {
    name: "alice",
    dob: "10-10-09",
    isEnrolled: ture
};


// array
let arr = [1,2,3,4,5,6];


// --------------------- Storage of data types ---------------------
// stack -> primitive data types stored here  
// heap -> value of non-primitive stored here