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


// creating default value 
// why we need it -> safe extraction, 
// if the key exist in my object good, return it
// if doesn't use defalt value

//if the key exist in my object good, return it
// if doesn't use defalt value

function createUser({name, role='user'}){
  console.log(name,role);
}

const user1 = {
  name : 'abhishek',
  role : 'admin',
} 

const user2 = {
  name : 'divyansh'
}

// role exist so it prints admin.
createUser(user1)

// role does not exist so it prints user.
createUser(user2)
