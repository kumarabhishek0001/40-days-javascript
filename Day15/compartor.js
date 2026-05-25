const users = [
    { name: "Abhishek", age: 21 },
    { name: "Rahul", age: 18 },
    { name: "Aman", age: 25 }
];


// sort younges to oldest 
const comparator = function (a, b) {
    return a.age - b.age;
}

console.log(users.sort(comparator));



const employees = [
    { name: "A", salary: 5000 },
    { name: "B", salary: 15000 },
    { name: "C", salary: 8000 }
];

const comp2 = function (a, b) {
    return b.salary - a.salary;
}

console.log(employees.sort(comp2));