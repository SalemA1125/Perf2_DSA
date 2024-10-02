let randomNumber = Math.floor(Math.random() * 10) + 1; 

let guessNumber = null;

while (guessNumber != randomNumber) {
    guessNumber = prompt("Guess a number between 1 and 10: "); 

    if (guessNumber < randomNumber) {
        console.log("Too Low!");
    } else if (guessNumber > randomNumber) {
        console.log(`Too High!`);
    } else if (guessNumber == randomNumber) {
        console.log('Correct!')
        break
    } else {
        console.log('Only input a number.'); 
    }
}
