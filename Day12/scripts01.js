console.log('Hello world!!');
const user = {
    name : "tapas",
    age : 40,
    "is admin": true,
    
}

// we cannot always get the values statically maybe we get it from some prompt, we store the promtp
// in some variable and now we want to assign it to age


let someKey = 'age';

// now we want to create an age property we cannot use user.somekey as js will think somekey is the property
// so we use braces.

console.log(user[someKey]);


// key is not hard coded but dynamically taken from the user
let car = prompt('Which is your favorite car');

let favCar = {
    [car]: 5 // we are dynamically making the properties, this say i have 5 bmw
}

console.log(favCar)

