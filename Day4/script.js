console.log("Welcome to JS Day 4.")

// controll flow

/*
if 
if-else 
switch 
case break 
continiue
*/

/*
if(condition){
    // code when condition evaluation is true
} else{
    // code when condition evaluation is false
}
*/

let catchingBus = false;
if(catchingBus){
    console.log('we will reach home on time');
}else{
    console.log('we will not reach home on time');
}


let age;


if(age>=18){
    console.log('You are eligible to vote');
    
}else{
    console.log('You are not eligible to vote');
}

// ----------------------------- Multiple If elese ----------------------------
let grade = 20;

if(grade>=90){
    console.log('Grade A');
} else if(grade>=80){
    console.log('Grade B');
} else if(grade >=70){
    console.log('Grade C');
} else{
    console.log('Fail');
}

// --------------------------- Nesting if else -------------------------------
const condition = false;
const innerCondition = false;

if(condition){
    console.log('outer if');
    if(innerCondition){
        console.log('Inner if');
    }else{
        console.log('inner else');
    }
}else{
    console.log('outer else')
}

// else : alone cannot exit

// --------------------------------- Switch case -----------------------------

const position =3; 
switch(position){
    case 1 : console.log('Print 1'); break;
    case 2 : console.log('Print 2'); break;
    case 3 : console.log('Print 3'); break;
    case 4 : console.log('Print 4'); break;

    default : {
        console.log('Nothing is matched')
    }
    
}


let day = 10;

switch(day){
    case 1:{
        console.log('Monday');
        break;
    }

    case 2:{
        console.log('Tuesday');
        break
    }
    
    case 3:{
        console.log('Wednusday');
        break
    }
    
    case 4:{
        console.log('Thursday');
        break
    }
    
    case 5:{
        console.log('Friday');
        break
    }

    case 6:{
        console.log('Saturday');
        break
    }

    case 7:{
        console.log('Sunday');
        break
    }

    default:{
        console.log('Invalid number! Enter a number between 1-7')
    }
    
}

// the condition in switch case can be other than number

let condition1 = true;

switch(condition1){
    
    case true:
        console.log('true');
        break;
    

    case false:
        console.log('false');
        break;
    
}

// faster than if-else
// for switch case jump table is created. we can directly go to the index of the case.
// good readability

// if else is great at handling complex logical condition;
// switch cases are fixed while ifelse are a lot flexible;


// ---------------------------------- ternary opreator ----------------------------
const mark = 40;

mark > 40 ? console.log("pass"):console.log('fail')