// aliasing

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

console.log('------------ Aliasing -------------');

const {std: standard} = student;
console.log(standard);
// console.log(std); // this throws an error, because js has now created the variable standard not std
// but keep in mind if std is somewhere made above it will now throw error


// ----------------------- destructing nested objects -----------------
// get address
const {address} = student

// get zip
// method-1


// method-2
// const {zip} = address;
// console.log(zip)


// method-3
const {address : {zip}} = student;
console.log(zip)

// ------------------- Function Destructuring --------------------

function sendEmail(studnet){
    console.log('sent email to',studnet.parents.email)
}

sendEmail(student)

// instrad of passing the whole object use desctuetureing

function sendEmail2({parents: {email}}){

    console.log(`sent email to ${email}`);

}

sendEmail2(student);


// destructuring function return value
