const name = "Alex";
const age = 20;
let isStudent = true;
let favoriteProgrammingLanguage = "Python";

// console.log("name:",name, "\nage:", age, "\nisStudent:", isStudent, "\nfavorite programming language:", favoriteProgrammingLanguage)

isStudent = false;
// age = 21; give unaught type error

// ---------------------------------------------------------------------------------

let arr = [1,2,3,4,5,6,7];
console.log("arr: ",arr);

let studentProfile = {
    name : "Alex",
    age : 20,
    isStudent : true,
    favoriteProgrammingLanguage : "Python"
};
console.log("student profile: ",studentProfile)

// --------------- assigning non-primitive values to other variables ---------------

let arr2 = arr;
arr2[0] = 100;
console.log(arr2);

let studentProfile2 = studentProfile;
studentProfile2["age"] = 29;
console.log(studentProfile["age"])
console.log(studentProfile2["age"])