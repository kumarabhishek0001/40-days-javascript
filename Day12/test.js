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

const {std: standard} = student;
console.log(standard)


// desctructuring nested object
const {address : {city,zip}} = student;
console.log(city,zip)


// function destructuring
// normal
function sendEmail(student){
  console.log(student.parents.email)
}

sendEmail(student);

// destructuring
function sendEmail2({parents:{email}}){
  console.log(email)
}

sendEmail2(student)
