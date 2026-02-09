// object destructuring
console.log('Object destructuring: ');

const student = {
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
};

// const name = student.name;
// const city = student.address.city;
// console.log(name, city);


// this is same as creating a variable
const {name, age} = student;
console.log(name, age);

// we simply create a new varaiable here named sports
const {address, sports = 'tennis'} = student;
console.log(address, sports);
console.log(student);


const {subjects, numberOfSubjects = subjects.length} = student;
console.log(numberOfSubjects);






