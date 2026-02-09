// object destructuring
console.log('Object Destructuring.....');

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


// how to access properties

// let name = student.name;
// let subjects = student.subjects;

// console.log(name, subjects)


let {name, address} = student;
console.log(name, address)


// creating new variables 
const {age, sports = 'tennis'} = student;
console.log(age, sports)