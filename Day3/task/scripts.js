console.log('Hello world!')

function oddEven(num){
    return (num%2 == 0) ? 'Even' : 'odd';
}

let result = oddEven(0);
console.log(result);




// -----------------------------------------------------------------------------------

function eligible(age){
    return (age>=18) ? 'Eligible' : 'Not Eligible';
}

let licenseEligiblity = eligible(18);
console.log(licenseEligiblity);

// -----------------------------------------------------------------------------------


function calculateCTC(salary){
    let baseSalary = salary;
    let bonus = ((20/100) * baseSalary);

    const ctc = baseSalary + bonus;
    return ctc;
}

const employee_ctc = calculateCTC(12300);
console.log(`employee_ctc : ${employee_ctc}`);

function trafficLightDecesion(color){

    color = color.toLowerCase();

    switch (color) {

        case 'red':
            
            console.log('STOP');
            break;

        case 'yellow':
            
            console.log('WAIT');
            break;
        
        case 'green':
            
            console.log('GO!!!');
            break;
            

        default:
            console.log('Invalid color');
    }
}

trafficLightDecesion('red');


// ------------------------------------------------------------------------------------------------

function electricityBillCalculator(unit){

    const days = 30;
    const perUnitCost = 150;
    const unitsConsumed = unit;

    const month_total = unitsConsumed*perUnitCost*days;

    const yearlyTotal = month_total*12;

    const discount = (20/100)*yearlyTotal;

    const discounted_total = yearlyTotal - discount;

    return {
        'Monthly_Bill' : month_total,
        'yearly_Bill' : yearlyTotal,
        'disconted_Yearly_bill' : discounted_total
    }
}

const bill_summary = electricityBillCalculator(300);
console.log(bill_summary)


function findMax(a,b,c){

    if(a>b && a>c){
        return a;
    }

    else if(b>a && b>c){
        return b;
    }

    else{
        return c;
    }

}

const max = findMax(3,3,3)
console.log(max)


console.log(5<<1)

