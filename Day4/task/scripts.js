console.log('Hello world!')

// ---------------------------------- Task-1 -----------------------------------------------

let day = "Monday";

switch (day) {
   case "monday":
       console.log("It's the start of the week.");
       break;
   default:
       console.log("It's a normal day.");
}

// ---------------------------------- Task-1 -----------------------------------------------

function ATM(amount){
    if(amount%100 == 0){
        console.log('Withdrawal successfull')
    }

    else{
        console.log('Only denominations of 100 are available.')
        console.log('Please enter a valid amount')
    }
}

// ATM(780)

// ---------------------------------- Task-1 -----------------------------------------------

function calculate(num1, num2, operation){
    

    switch (operation) {
        case '+':
            console.log(`addition: ${num1+num2}`);
            break;
        
        case '-': 
            console.log(`Substraction: ${num1 - num2}`);
            break;

        case '*': 
            console.log(`Substraction: ${num1 * num2}`);
            break;

        case '/': 
            console.log(`Division: ${num1 / num2}`);
            break;


        default:
            console.log('Invalid operator')
            break;
    }
}



function getValues(){
    let num1 = window.prompt('Enter first num:');
    num1 = Number(num1)

    let num2 = window.prompt('Enter first num:');
    num2 = Number(num2);

    let operation = window.prompt('Enter Operator:');

    

    calculate(num1, num2, operation);

    
}

// getValues()


// ---------------------------------- Task-1 -----------------------------------------------

function ticketPrice(age){
    
    if(age<18 && age>0){
        console.log('Price: $3');
    }

    else if(age>=18 && age<=60){
        console.log(`price: $10`)
    }

    else if(age>60){
        console.log('Price: $8')
    }

    else{
        console.log('Please enter a valid age.')
    }
}

ticketPrice(-1)


// ---------------------------------- Task-1 -----------------------------------------------

let month = 'March';

switch (month) {
    case 'March':
    case 'April':
        console.log('Aries');
        break;

    case 'April':
    case 'May':
        console.log('Taurus');
        break;

    case 'May':
    case 'June':
        console.log('Gemini');
        break;

    case 'June':
    case 'July':
        console.log('Cancer');
        break;

    case 'July':
    case 'August':
        console.log('Leo');
        break;

    case 'August':
    case 'September':
        console.log('Virgo');
        break;

    case 'September':
    case 'October':
        console.log('Libra');
        break;

    case 'October':
    case 'November':
        console.log('Scorpio');
        break;

    case 'November':
    case 'December':
        console.log('Sagittarius');
        break;

    case 'December':
    case 'January':
        console.log('Capricorn');
        break;

    case 'January':
    case 'February':
        console.log('Aquarius');
        break;

    case 'February':
    case 'March':
        console.log('Pisces');
        break;

    default:
        console.log('Invalid month');
}


function equalSides(a,b,c){

    let sum = 0;

    if(a === b){
        sum += 1;
        console.log('sum1', sum)
    }

    if(b === c){
        sum+=1;
        console.log('sum2', sum)
    }


    if(c === a){
        sum += 1;
        console.log('sum3', sum)
    }

    return sum;

}
function triangleType(a,b,c){

    let result = equalSides(a,b,c);

    if(result == 3){
        console.log('Equilateral Triangle');
    }

    else if(result == 2){
        console.log('Isosceles Triangle');
    }

    else{
        console.log('Scalene Triangle');
    }

    
}

triangleType(1,2,1)

