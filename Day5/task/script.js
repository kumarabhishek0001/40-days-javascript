

function task1() {

    for (let i = 0; i <= 5; i++) {

        let line = '';
        for (let j = 0; j < i; j++) {
            line += '*'
        }
        console.log(line)

    }

}


function task2() {
    for (let i = 0; i <= 10; i++) {
        console.log(`3 x ${i} = ${3 * i}`);
    }
}

function task3(){

    let sum = 0;
    for(let i=1; i<=500; i++){
        if(i%2 != 0){
            sum += i;
        }
    }

    console.log(sum)
}

function task4(){

    
    for(let i=1; i<=20; i++){
        if(i%3 != 0){
            console.log(i);
        }
    }

    
}

function reverseNumber(num){

    let reversed_num = 0

    while(num>0){
        let extracted = num % 10;
        console.log('extracted', extracted)


        reversed_num = (reversed_num * 10) + extracted;
        console.log('reversed_num', extracted)
        
        
        num = Math.floor(num/10);
        console.log(num);
    }

    console.log(reversed_num);
}

reverseNumber(9870)

