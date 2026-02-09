console.log('Hello world!')

// other ways to create object: influences how we will be using one object from another object.

// constructior function
function Car(name, model){
    // car has two properties name and model, the properties are defined using this
    // on the rhs are the parameters from above
    this.name = name,
    this.model = model
}

const bmwCar = new Car("BMW", "X1");
console.log(bmwCar);

const audiCar = new Car("AUDI", "A8");
console.log(audiCar);

console.log(audiCar instanceof Car)


// -----------------------------------------------------

const person = new Object()
person.name = 'alpha';
person.age = 30;

console.log(person)

// ---------------------------------------------------- Factory Function
function createUser(name,age){
    return {

        //this is shorthand
        // this is internally interpretted ass name: name, but do this when parmeter has to be same as key name
        name,
        age
    }
}

// here you don't need to use new keyword to make a new instace. While when using constructor function new keyword is needed.
const user1 = createUser('taps', 29)
console.log(user1)

const user2 = createUser('bob', 39)
console.log(user2)


// object litrals
// not standing upto their ownstandards