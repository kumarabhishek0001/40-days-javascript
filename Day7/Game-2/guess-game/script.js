function getUserInput(){
    const input = window.prompt('Guess A Number:')

    const userChoice = Number(input);
    
    let flag = true;

    while(flag){
        if(Number.isNaN(userChoice)){
            console.log('Invalid Input! Please Enter a Valid Number.')
            getUserInput();
        }
        else{
            flag = false;
            return userChoice;
        }
    }
}



function guessTheNumber(){

    const target = Math.floor(Math.random() * (10-0)) + 0;
    
    console.log('target:', target)

    let userChoice = getUserInput()

    let targetNotReached = true;

    let count = 1;
    while(targetNotReached){
        if(userChoice == target){

            targetNotReached = false;
            console.log('Yay!! You win.')
            console.log("It Took you",count,"attempts!!")
        }

        else if(userChoice < target){
            count += 1;

            console.log('You are too low.')
            input = window.prompt('Guess again!!');
            userChoice = Number(input);
        }

        else{
            count += 1;

            console.log('You are too high')
            input = window.prompt('Guess again!!');
            userChoice = Number(input);
        }
        
    }
}

document.addEventListener('DOMContentLoaded', () => {
    guessTheNumber()
});