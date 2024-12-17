let randomNumber = Math.floor(Math.random() * 100) + 1;
let guess;
let attempt = 0;
let maxAttempt = 90;

do{
  guess = parseInt(prompt("Guess a number between 1 to 100"),10);
    attempt++
  if(isNaN(guess) || guess > 100 || guess < 1){
    // alert(`Try Again, Your Guess: ${guess}, Computer Guess: ${randomNumber}`);
    alert(`Your guess is Invalid, Try again and guess in between 1 to 100`);
  }
  else if(guess > randomNumber){
    alert("too high");
  }
  else if(guess < randomNumber){
    alert("too low");
  }
  else if(guess===randomNumber){
    alert ("congratualtions! Your guess is correct")
    alert(`Your Score is: ${100 - attempt}`);
    break;
  }
  if(attempt===maxAttempt){
    alert("You have reached max attempt, You loose")
    break;
  }
}
while(guess!==randomNumber);