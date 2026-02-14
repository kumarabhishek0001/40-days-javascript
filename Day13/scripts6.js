// "use strict"

const user = {
    name1: 'tapas',
    city : 'kolkata',

    greet : function(){
        function inner(){
            console.log(`${this.name1} lives in ${this.city}`)
        }

        inner()
    }
}

user.greet()

// 1. Here inner is stand alone function hence this is not poiting to name
// 2. solution we can just make it arrow function as then it will be binded with it's parent scope, i.e the one containign name
// 3. So arrow function is not just to make syntax simpler it was interoduced for this reason also in order to bind the inner function to the outer scope

const user2 = {
    name: 'tapas',
    city : 'kolkata',

    greet : function(){
        const inner = () => {
            console.log(`${this.name} lives in ${this.city}`)
        }

        inner()
    }
}


user2.greet()



// ============================= Problem-2 ===============================

const obj = {
    name1 : "John",
    greet : function(){
        console.log(`Hello! ${this.name1}`)
    }
}

const greetFn = obj.greet;
greetFn() // hello undefined.
// this is because we look at point of invokacation while trying to find what this is binded to
// since greetFn is not invoked with obj it is not related to obj at all but is attached to global/window
// now inorder to attch it with obj we need explicit binding

greetFn.call(obj)

