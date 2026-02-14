// using strict mode
// a stand alone function always refers to undefined
// in case of arrow function it depends on who is surrounding the arrow function

// this is connected to the parent scope of whereever we have defined our arrow function 
"use strict"

function standAlone(){
    console.log('In stand alone function "This" refers to:',this);
}

standAlone()

const getFood = () => this;
console.log("Arrow function 'this' refer to: ",getFood())


// who will prevail??

const food = {
    name : 'mango',
    color : 'yellow',

    // a normal method this is binded to the object
    // implicit binding 
    // getDescription : function(){
    //     console.log(`${this.name} is ${this.color}`)
    // }

    // food scope is global/window
    // color and name property does not exist in these 2 so it throws an error

    // getDescription : () => {
    //     return `${this.name} is ${this.color}`
    // }

    // now since we know that the arrow function this is binded to it's parent we can simply do something that the parent refers to out object i.e to close it inside other function 

    getDescription : function(){
        return () => `${this.name} is ${this.color}`
    }
}
const retVal = food.getDescription()

// here closure is also working as even after getDescription is done executing we can still access variables using this
console.log(retVal())