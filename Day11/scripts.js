console.log('hello world!')

function outer() {

    let x = 10;

    return function inner() {
        console.log(x);
    }


}

const func = outer()
func()


// --------------------------------------------


function outerCount() {
    let count = 0;

    return function innerCount() {
        count++;
        console.log(count);
    }
}

const retVal = outerCount();
retVal(); // 1
retVal(); // 2
retVal(); // 3


// here variable of the outer scope is not exposed. It is like a private varible.
// we are never allowing user to modify the the count varible directly. 
// throught the clousre we are providing and access to the variable, without making it public to the outside consumer.

// ----------------------------------------------------

// paradigm -> data encapsulation: never expose private data or private variable to the outer world
// if they want to use the data or variable they do it using some methods or some functions.
// we expose the function not the variable.

// baking system example
// Cannot return multiple values in one function. So we use objects

function createBankAccount(initialBalance) {

    let balance = initialBalance; // don't expose this

    return {
        // can either be an anonymous function
        "deposite": function (amount) {
            balance = balance + amount;
            console.log(`Depsited: ${amount}, current balance: ${balance}`)
        },
        // or can be an arrow function
        "withraw": (amount) => {
            if (amount <= balance) {
                balance = balance - amount;
                console.log(`amount withdrawn: ${amount}, current balance: ${balance}`)
            }

            else{
                console.warn('Insuffucient Funds')
            }

        },

        "check_balance" : () => {
            console.log(`current balance: ${balance}`)
        }
    }

}


let akj = createBankAccount(1000);
akj.deposite(100);
akj.withraw(100);

akj.withraw(1100)

// ------------------------------ Carefully use closure ------------------------------------

function dealWithBigData(){

    const bigData = new Array(10000).fill('*');

    return function (){
        data = bigData[3]; // the data variables refers to memory location where bigdata[3] is stored.
        console.log(data);
    }
}

const variable12 = dealWithBigData();
variable12() // see the function is stored in the variable named variable12 this function has varaible
// that refers to a very big data it never gets cleaned from the memory, hence it keeps occupying space
// this is called memory leak.

// ------------------------------------- Advantages of Closures -----------------------------


// 1. Keep the variable private withut exposing them.
// 2. Stop variable polution.
// 3. Create function factor (create bank account function).
// 4. Keep the variable alive between mutiple calls.


function timer(){
    let sec = 0;

    return function(){
        sec++;
        console.log(`elapsed seconds: ${sec}`);
    }
}

// here everytime we call timer a new scope is created so we are not working on the same variable we are initalizing the variable again by calling the timer
timer()()
timer()()
timer()()

const timerInstace = timer();
timerInstace() // 1
timerInstace() // 2
timerInstace() // 3
timerInstace() // 4
timerInstace() // 5


// -------------------------------- Closures and event handlers ------------------------------------

function setupButton(){

    let clickCount = 0;
    document.getElementById("mybutton").addEventListener('click', function(){
        clickCount++;
        console.log(`Button Clicked: ${clickCount} times`)
    })
}

setupButton()