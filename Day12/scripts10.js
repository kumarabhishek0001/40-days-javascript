console.log('----------- Destructuring function return value -----------');

const getStudent = () => {
    return {
        name: "Rahul Sharma",
        age: 16,
        std: 10,

        subjects: ["Math", "Science", "English", "History"],

        parents: {
            mother: "Sunita Sharma",
            father: "Amit Sharma",
            email: "amit.sharma@example.com"
        },

        address: {
            street: "123 MG Road",
            city: "Delhi",
            country: "India",
            zip: "110001"
        }
    }
}



// method-1
// const record = getStudent();
// const name = record.name;
// const subjects = record.subjects;

// console.log(name, subjects);

// method-2
const { name: anotherName, subjects: anotherSubject } = getStudent();
console.log(anotherName, anotherSubject)


// -------------- Destructuring in Loops --------------

console.log("--------------- Destructuring Loops ---------------");

const student = [
    {
        name: 'william',
        grade: 'A'
    },

    {
        name: 'Tom',
        grade: 'B+'
    },

    {
        name: 'Bob',
        grade: 'B'
    }
];

for (let { name, grade } of student) {

    console.log(name, grade);

}

