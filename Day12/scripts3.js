function createUser(name,age){
    return{
        name,
        age,

        // function inside object is called a method
        greet(){
            console.log('hello',this.name)
        }
    }
}

let user1 = createUser('tapas',30);
user1.greet()


let profile = {
    name: "tapas",
    company: "CreoWis",

    message: function(){
        console.log(`${this.name} work at ${this.company}`);
    },

    // nested object
    address:{
        city: "bangalore",
        pincode: "110077",
        state: "karnataka",
        country: "India",

        greeting: function(){
            console.log(`Welcome to ${this.country}`)
        }
    }
}

console.log(profile.name);
console.log(profile.company);
profile.message()

profile.address.greeting()



// how to check if certain property exist in the object

if(!profile.salary){
    console.log('Property Does not Exist.')
}
// till here it print does not exist as my salary is not present
// but this breaks lets say a property(key) has a fasly value(false, null, undefined) then the above also executes

profile.isAdmin = false;
console.log(profile); // is admin is present in the profile object and it's value is false

// let's check
if(!profile.isAdmin){
    console.log('Property Does not Exist.') // this is executing as isAdmin is false, we need something else
}

console.log("isAdmin" in profile) // right way to check if property exist or not



// get all properites
for(let key in profile){
    console.log(`${key} : ${profile[key]}`);
}


console.log(Object.keys(profile))

// object referce

let fruit = {name: "mango"};
const anotherFruit = {name: "mango"};

console.log(`fruit == anotherFruit: ${fruit == anotherFruit}`)
console.log(`fruit === anotherFruit: ${fruit === anotherFruit}`)

// assigning variables to each other
// now they referce the same memeory location

fruit = anotherFruit;
console.log(`fruit == anotherFruit: ${fruit == anotherFruit}`)
console.log(`fruit === anotherFruit: ${fruit === anotherFruit}`)
