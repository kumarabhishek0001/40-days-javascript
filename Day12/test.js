// optional chianing

const employee = {
  salary: {
    bonus: 300
  }
}

// say this is the data we get from an api
// we don't know what is available to us and what is not

const anotherName = employee.salary?.bonus
console.log(anotherName)