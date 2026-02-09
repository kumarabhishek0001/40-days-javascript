// object.entries

let studentProfile1 = {
    name: "abhishek",
    department: "engineering",
    address: {
        state: "new delhi",
        district: "north west",
        pincode: 110085
    }
}

const studentArr = Object.entries(studentProfile1);
console.log(studentArr);


// re

const enteries = new Map([
    ['foo','bar'],
    ['baz',42]
])

const objEnteries = Object.fromEntries(enteries);
console.log(objEnteries);

// immutability -> freeze ---------------------------------
// it is completely immutable

const employee = {
    salary: 1000,
}

Object.freeze(employee);

employee.salary = 200; // since the employee is now freezed it cann not be changes
console.log(employee)
console.log(Object.isFrozen(employee))

// immutablity -> 

const dept = {
    name: 'finance'
}

Object.seal(dept);

dept.name = 'HR'; // reassigning is possible, any other is not
console.log(dept)

// has own -> checks if certain key is there
console.log(Object.hasOwn(dept, 'name'));