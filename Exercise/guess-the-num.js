let randomNumber = Math.floor(Math.random() * 10) + 1;
let guess;
let attempt = 0;
let maxAttempt = 6;

do{
  guess = parseInt(prompt("Guess a number between 1 to 10"),10);
    attempt++
  if(isNaN(guess) || guess > 10 || guess < 1){
    // alert(`Try Again, Your Guess: ${guess}, Computer Guess: ${randomNumber}`);
    alert(`Your guess is Invalid, Try again and guess in between 1 to 10`);
  }
  else if(guess > randomNumber){
    alert("too high");
  }
  else if(guess < randomNumber){
    alert("too low");
  }
  else if(guess===randomNumber){
    alert ("congratualtions! Your guess is correct")
    break;
  }
  if(attempt===maxAttempt){
    alert("You have reached max attempt, You loose")
    break;
  }
}
while(guess!==randomNumber);