let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomNumber = Math.ceil(Math.random() * 100);
console.log(randomNumber)

function checkGuess() {
    let guessNumber = (parseInt(userInput.value));
    console.log(guessNumber);

    if (guessNumber > randomNumber) {
        gameResult.textContent = "Too high! try again!";
        gameResult.style.backgroundColor = "blue";
    } else if (guessNumber < randomNumber) {
        gameResult.textContent = "Too low! try again!";
        gameResult.style.backgroundColor = "blue";
    } else if (guessNumber === randomNumber) {
        gameResult.textContent = "Congratulation! you got it right!";
        gameResult.style.backgroundColor = "green";
    } else {
        gameResult.textContent = "Provide a valid user input. ";
        gameResult.style.backgroundColor = "darkblue";
    }



}