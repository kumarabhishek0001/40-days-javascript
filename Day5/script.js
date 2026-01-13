console.log("Day 5: Loops and Iterators");
// ---------------------------- For Loops ----------------------------

// used when we exaclty know how many times to run the loop.
// for(initialization; condition; update){

// }

// initialization -> from where we want to start the loop
// condition -> the last point or the breaking point till we want to run the loop
// update -> how to update the values to move ahead in the loop

for(let i=0; i<=5; i++){
    console.log('Iteration/Loop',i);
}

// addition of even number till 100;
let sum =0;
for(let i=0; i<=100; i++){
    if(i%2 == 0){
        sum = sum + i;
    }
}
console.log(sum);

// access all elements in a string

const language = 'Javascript';
for(let i=0; i<language.length; i++){
    console.log(language.charAt(i));
}


// ---------------------------------- Nested Loops-----------------------------
// lets you work with two dimenstions like matrix

// just observe the pattern how we this nested loop is runnig

for(let i=0; i<5; i++){
    
    for(let j=0; j<=5; j++){
        console.log('row:',i, 'col:',j)
    }
}

// for every 1 outer loop completion, the inner loop runs 1 complete cycle.

// ----------------------------- break ----------------------------

// exit out of loop
for(let i=1; i<=5; i++){
    console.log(i)
    if(i==3){
        break;
    }
}

// ---------------------------- Continue -------------------------- 
// skipping a perticular iteration and continuing from the next one
for(let i=1; i<=5; i++){
    console.log(i)
    if(i==3){
        continue;
    }
}


// ----------------------------- handling multiple counters----------------------------
for(let i=1, j=10; i<=10 && j>=1; i++, j--){
    console.log(i,j);
}

// ------------------------------------------------------------------------------------
console.log('##################################################')

/*
*
**
***
****
*****
*/
let rows=5;

// ------------------------------ While Loop -------------------------------------------

let counter = 0
while(counter < 10){
    console.log(counter)
    counter++

}

let num = 1;
do{
    console.log(num);
    num++;
    
}while(num <= 5);