function rockPaperScissorsGame(){
    console.log('Getting started with Rock, Paper, Scissor Game');

    const userChoicePrompt = window.prompt("Enter Rock, Paper, Scissor");

    let userChoice = userChoicePrompt.toLowerCase();

    const randomNumber = Math.floor(Math.random() * 3) + 1;
    let computerChoice;

    switch (randomNumber) {
        case 1:
            computerChoice = "rock";
            break;
        
        case 2:
            computerChoice = "paper";
            break;

        case 3:
            computerChoice = "scissor";
            break;

        default:
            break;
    }

    console.log("User Selected:",userChoice);
    console.log("Computer Selected:",computerChoice);


    if(
        (userChoice === "rock" && computerChoice === "scissor") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissor" && computerChoice === "paper")
    ){
        console.log("You Win!! <3")
    }

    else if(userChoice == computerChoice){
        console.log('This Game is a Tie')
    }

    else if(
        (userChoice === "scissor" && computerChoice === "rock") ||
        (userChoice === "rock" && computerChoice === "paper") ||
        (userChoice === "paper" && computerChoice === "scissor")
    ){
        console.log('Computer Wins')
    }

    else{
        console.log('Invalid Input by user.')
    }

    const playAgainPrompt = window.prompt('Do you want to play agian? (yes/no)')
    const playAgain = playAgainPrompt ? playAgainPrompt.toLowerCase() : "no";

    if(playAgain === "yes"){
        rockPaperScissorsGame()
    }

    else{
        console.log('Thank you for playing! See you next time.')
    }
}

// start game
rockPaperScissorsGame()

// global widnow objects methods which is available on browser