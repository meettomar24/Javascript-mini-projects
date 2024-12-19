let choices = ["rock", "paper", "scissor"];

function userInput(){
    let user = prompt("choose rock, paper or scissor");
    user = user.toLowerCase();
    while(true){
        if(user===null || user===undefined){
            return;
        }
        else if(choices.includes(user)){
            return user;
        }
        else{
            alert("Invalid Input");
            return userInput();
        }
    }
}

function Computer(){
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}



function winner(computerChoice, userChoice){   
    if(computerChoice === userChoice){
        return "Its a tie";
    }
    else if(computerChoice === "rock" && userChoice === "paper" || computerChoice === "paper" && userChoice === "scissor" || computerChoice === "scissor" && userChoice === "rock"){
        return "You Win!";
    }
    else{
        return "computer win!";
    }

}
 function playGame(){
    let userChoice = userInput();
    if(userChoice===null || userChoice===undefined){
        return;
    }
    let computerChoice = Computer();
    alert(`you choose ${userChoice}, Computer choose ${computerChoice}`)
    alert(winner(computerChoice, userChoice));
    if(confirm("Do you want to play again?")){
        playGame();
    }
 }
playGame();