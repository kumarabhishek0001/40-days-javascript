// explicit binding - call, apply, bind

// call the greeting function in the context of user object

function greetings(){
    console.log(`Hello ${this.name} belongs to ${this.address}`)
}


const user = {
    name : 'Profit',
    address : 'Belongs to all of you'
}

greetings.call(user);


const likes = function(hobby1, hobby2){
    console.log(`${this.name} likes ${hobby1} & ${hobby2}`);
}

const person = {
    name : 'tapas'
}

likes.call(person, 'tennis', 'cricket')

// apply
// issue arises with call when need to give a lot of arguments 

const applyHobby = ['sleeping', 'vlogging'];
likes.apply(person,applyHobby)


// bind

const newHobbies = function(hobby1, hobby2){
    console.log(`${this.name} likes ${hobby1} + ${hobby2}`)
}


const officer = {
    name : 'bob'
}

// bind returns a function where as call immidiately executed
// benifit I can use this to run the function only in certain conditions or maybe later in my software
const newFn = newHobbies.bind(officer, 'dancing', 'singing');

newFn()
