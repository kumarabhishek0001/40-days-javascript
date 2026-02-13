# Object and it's manipulations

It is a non-primitive data type that functions as a collection of related data and functionalities. It stores data in key-value pairs.

## Creating an Object

```js
let user = {
    name: 'tapas',
    age: 40,

    // if a key has special characters it need to put inside double quotes.
    "is admin" : true // space is a speicial character.

}
```


## Accessing values using key

- A key with no special characters can be accessed by using (.) operator.
```js
user.name;
users.age;
```

- A key contain special charactes can be used by using square brackets and double quotes.
```js
user["is admin"]
```

## Adding key values in object

Same rules as of above just use assignment operators.

```js
user["movie lover"] = true;
user.isSeniorCitizen = false;
```

## Dynamic property access

- property name is stored in variable or and expression
- dynamic property access is when you read or write an object's property using value determined at runtime, rather than a fixed hard coded propery name

Here the value of filter changes depending on what users choose - 

```js
// use case 1
const product1 = {
    name : 'shampoo',
    price: 210,
    mfdOn: '21-01-2026',
    expiry: '21-10-2026',
    placedIn: 'eisle-3',
    totalProductsInInventory: 1200
}

let filter = 'name'
// the fitre value may keep changing

console.log(product1[filter])// we cannot use dot natations here


// use case 2
function propertyAccess(obj,key){
    console.log(obj[key]);
}

propertyAccess(product1,'name');
```


```js
let car = prompt('Which is your favorite car');

let favCar = {
    [car]: 5 // we are dynamically making the properties, this say i have 5 bmw
}

console.log(favCar)
```
## Different ways to create Object

### Method-1
```js

const user = {
    name : 'abhishek',
    age: 22,
    programEnrolled: 'engineering',
}
```

### Method-2: Using Constructor Function

```js
function Car(brand, model){
    this.brand = brand,
    this.model = model
}

const car1 = new Car("BMW","X1");
console.log(car1)


const car2 = new Car("Audi", "Q3");
console.log(car2)
```


### Method-3: using Object class

```js
const person = new Object();
person.name = 'tapas';
person.age = 32;

console.log(person)
```


### Method-4: Using factory function

```js
// using factory functon
function createUser(name, age){
    return{
        name,
        age
    }
}


const user1 = createUser('tapas', 2)
console.log(user1);
```

## Shorthand and Methods

- A function inside an object is called a method

here greet is a method
```js
function createUser(name,age,department){

    return {
        // these are shorthands
        // name: name
        name,

        // age: age
        age,

        // department: department
        department,


        // this is called a method shorthand
        // greet  : fucntion(){console.log('hello', this.name)}
        greet(){
            console.log('hello', this.name);
        }
    }
}
```

```js
// create user

let profile = {

    name: 'tapas',
    company: 'CreoWis',

    message: function(){
        console.log(`${this.name} works ate ${this.company}`);
    },

    address: {
        country: 'India',
        state: 'Delhi',
        district: 'North west',
        pincode: 110085,

        greetings(){
            console.log(`Hello! ${profile.name} from ${this.country}`);
        }
    }
}

console.log(profile.name);
profile.message()
profile.address.greetings()
```


## Checking if certain property access

We can use conditional statements but if the value of key is a falsy value on accessing it it will return a false my condition is strutured in such a way that it responds to false. Even if it does not response to false it is not a valid way to check if certain property exists or not

```js
// create user

let profile = {

    name: 'tapas',
    company: 'CreoWis',

    message: function(){
        console.log(`${this.name} works ate ${this.company}`);
    },

    address: {
        country: 'India',
        state: 'Delhi',
        district: 'North west',
        pincode: 110085,

        greetings(){
            console.log(`Hello! ${profile.name} from ${this.country}`);
        }
    }
}


// console.log(profile.age) // this does not exist so returns undefined
// undefined is falsy

if(!profile.age){
    console.log('This property does not exist!!')
}

// flawed -> if any propery has a falsy value and it exists it also returns does not exist but that is not the case

profile.isActiveUser = false;
if(!profile.age){
    console.log('This property does not exist!!')
}

// even this anwers as does not exist but that is not the case 
```

### Use In operator

```js
if('isActiveUser' in profile){
    console.log('Ok!!')
}
else{
    console.log('Does not exist!!')
}

// since propery exist Ok!!

if('isAdmin' in profile){
    console.log('Ok!!');
}
else{
    console.log('Does not exist!!');
}
```

### for in loop

```js
for(key in profile){
    console.log(`${key}: ${profile[key]}`)
}
```

## Object referce

Two objects with the same values are stored at different memory location. Equality operator does not compre the value but compares the memeroy location

```js
let fruit = {
    name: 'mango'
}

let anotherFruit = {
    name: 'mango'
}

// same values but yet equality won't hold, as equality operator compares the memoty location not the value of object 

console.log(fruit === anotherFruit); // false

```


## Important Object Methods

### Static methods

- belongs to the class itself, not the individual instance.

- is called on the called on the class, not on the objects created from the classes.

- often used for utility function that does not need specific instance data.


### 1. Assign
takes value from the the source and puts it in the target

**source is given preferce**
```js
let source = {b:30, d:40};
let target = {d:10, b:40};

let result = Object.assign(target,source);
console.log(result);
```

Using assign to copy value -> this create a shallow copy

```js
let studentProfile1 = {
    name: "abhishek",
    department: "engineering",
    address: {
        state: "new delhi",
        district: "north west",
        pincode: 110085
    }
}

let studentProfile2 = Object.assign({},studentProfile1);
console.log(studentProfile2)
```


shallow copy, primitives are copied by values but non-primities are copied by referece

meaning in shallow copy if you change the value of non primitives both copy and original are overwritten

testing
```js
let studentProfile1 = {
    name: "abhishek",
    department: "engineering",
    address: {
        state: "new delhi",
        district: "north west",
        pincode: 110085
    }
}

studentProfile2 = Object.assign({},studentProfile1);

console.log(studentProfile1.address === studentProfile2.address)

console.log(studentProfile1 === studentProfile2)
```

### Deep Copy techniques 
- whole valus of the object is copied

    1. Structured Clone

```js
studentProfile2 = structuredClone(studentProfile1)
```

    2. using JSON

```js
let studentProfile3 = JSON.parse(JSON.stringify(studentProfile1))
```

### 2. Entries

- Enteries converts an object into an array of arrays

meaning the outer array contains many inner arrays, the inner contains two things first the key second the values


### 3. fromEntries

- This is opposite of enteries, it simply just convert an array of arrays to object.

- the outer arrays should always contain array like objects.

```js
const enteries = new Map([
    ['foo', 'bar'],
    ['baz', 42]
])

const objEnteries = Object.fromEntries(enteries);
console.log(objEnteries)
```

### 4. Object.hasOwn

this checks if a propery exist in the object only. It does not check the parent or the protypal chain

```js
Object.hasOwn(ObjectName, propertyName);
```


## Imutability

Making an object kind of read only. we have 2 static methods but they both differ largly in behavior and strictness.

Both of these freezes works only on the top level of the object.

### 1.Object.Freeze

- Nothing can be added
- Nothing can be removed
- nothing can be modified
- Freezes [property descriptors](#property-descriptor) so they cannot be changed.

```js
let student = {
    name: 'abhishek',
    age: 22
}

Object.freeze(student);

student.name = 'ajax'
console.log(student)
```

- It only throws error in strict mode.
- In non strict mode no error just the object remains unchanged

### 2. Object.seal

similar to above just let us modify the value for already defined keys.

- cannot add keys
- cannot already defined keys
- can modify already defined key
- Keeps the existing property descriptors intact (writable, configurable, enumerable).

```js
const dept = {
    name: 'finance'
}

Object.seal(dept);

dept.name = 'HR'; // reassigning is possible, any other is not
console.log(dept)
```

### Property Descriptor

Every property of an object in JavaScript has metadata — not just a value. This metadata is called a property descriptor, and it controls:

Whether the property can be changed

Whether it can be deleted

Whether it shows up in loops

Whether it’s accessed via getters/setters


```js
let obj = { a: 10 };

let descriptor = Object.getOwnPropertyDescriptor(obj, "a");
console.log(descriptor);
```


## Destructuring Objects

Creating variable without a lots of variable creation or repeated code

```js
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

let name = student.name;
let subjects = student.subjects;

console.log(name, subjects)
```

above code is repetitive just to create extra variable

```js
let {name, address} = student;
console.log(name, address)
```

### Default values
why we need it -> safe extraction

if the key exist in my object good, return it
if doesn't use defalt value

```js
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
```

**Example - 2**
```js
const {subjects, numberOfSubjects = subjects.length} = student;
console.log(numberOfSubjects);
```


## Aliasing

```js
const {name: student_name, age: student_age} = student
console.log(student_name, student_age);
```
key in object -> another name for key

## Destructuring Nested Objects

```js
const {address : {city,zip}} = student;
console.log(city)
console.log(zip)
```

## Function Destructuring

Rather than passing all object data in the function we extract relevent properties, these properties are passed in the parameters. 

*without destructuring in the params*

```js
function sendEmail(student){
  console.log(student.parents.email)
}
```

*with destructuring in the params*

```js
function sendEmail2({parents:{email}}){
  console.log(email)
}

sendEmail2(student)
```






