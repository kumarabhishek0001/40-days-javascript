console.log('Hello World!!')


const employee = {
    firstName : 'Alice',
    lastName : 'Madison',
    id : 'A5409',
    
    returnThis : function(){
        return this;
    },

    // 3. since this is bound to the object in which it is called
    getFullName : function(){
        return `${this.firstName} ${this.lastName}`
    } 

}

console.log('First Name:',employee.firstName);

// 1. when we invoke a method on an object the context of this is bound to object in which we have invoked the function/method.

// 2. implicit binding -> If a method is called on an object using dot notation the contxt of this is bound/associate to the object on which we have invoiked a method

console.log('Value of this:',employee.returnThis());

console.log('Constructing full name using "this" keyword:',employee.getFullName())


const tom = {
    name : 'tom',
    age : 7
}

const jerry = {
    name : 'jerry',
    age : 3
}

function greetMe(obj){
    obj.logMessage = function(){
        return `${this.name} is ${this.age} years old.`
    }
    
    console.log(obj)
}

greetMe(tom);
// 4. Always look where the function is invoked or called, then apply the concept of implicit binding. This helps you determine the value of this
console.log(tom.logMessage()); 


