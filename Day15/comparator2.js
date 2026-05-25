const students = [
    { name: "A", marks: 90, age: 20 },
    { name: "B", marks: 95, age: 22 },
    { name: "C", marks: 90, age: 18 }
];

const comparator = function (a, b) {

    if (a.marks === b.marks) {
        return a.age - b.age
    }

    return b.marks - a.marks;
}

console.log(students.sort(comparator))