console.log('Hello world!');
// static method

// 1. Assign
let source = {a:10, b:20};
let target = {b:30, d:40}

let final = Object.assign(target,source);
// source retains it's value


console.log(final)


const obj = {name : 'abhishek'};
const obj2 = Object.assign({}, obj);

console.log(obj2);
console.log(obj2 === obj); //obj2 is a copy, they don't share same referce
// shallow copy is done, if any key that has non-primitive data is changed in obj2 it will also be changed in obj1

// --------------------------------- shallow copy ---------------------------------
let studentProfile1 = {
    name: "abhishek",
    department: "engineering",
    address: {
        state: "new delhi",
        district: "north west",
        pincode: 110085
    }
}

let studentProfile2 = Object.assign(studentProfile1);
console.log("studentProfile2: ",studentProfile2)

// chaging something in student profile 2
studentProfile2['address']['state'] = 'punjab'

console.log("studentProfile2: ",studentProfile2); //change is reflected here good, we wanted that, expected behavior

// but on checking profile1 also changed we didn't want this
console.log("studentProfile1: ",studentProfile1); 


