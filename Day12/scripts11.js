console.log('Optional Chaining....');

const employee = {
    salary: {
        bonus: 300
    }
}

// when we get data from an API we may not know what is available to us and what is not

// now how do we check we use nullish cohesion
// a && b
// if a is null or undefined b
// else a

const name = employee.departments && employee.departments.name
console.log(name); // undefined

// use optional chaing

const anotherName = employee.departments?.name //gracefully fail
console.log(anotherName)

const bonus = employee.salary?.bonus; 
console.log(bonus)