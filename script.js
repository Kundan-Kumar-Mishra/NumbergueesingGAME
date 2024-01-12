let randomNumber = parseInt((Math.random() * 100) + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessFild");
const guessSlot = document.querySelector(".guesses");
const lowOrHi = document.querySelector(".lowOrHi");
const remaining = document.querySelector(".lastResult");
const startOver = document.querySelector(".resultParas");


let preGuess = [];
let numGuess = 1;
let playgame = true;
let p = document.createElement("button");

if (playgame) {
    submit.addEventListener("click", function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);

    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("please enter a valid number");
    }
    else if (guess < 1) {
        alert("please enter a number more than 1");
    }
    else if (guess > 100) {
        alert("please enter a number less than 100");
    }
    else {
        preGuess.push(guess);
        if (numGuess === 11) {
            displayGuess(guess);
            displayMessage(`Game over! Random number was ${randomNumber}`);
            endGame();
        }
        else {
            displayGuess(guess);
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`you guessed it right`);
        endGame();
    }
    else if (guess < randomNumber) {
        displayMessage(`Number is Too low!`);
    }
    else if (guess > randomNumber) {
        displayMessage(`Number is Too High!`);
    }
}

function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess}  `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;

}

function endGame() {
    userInput.innerHTML = '';
    userInput.setAttribute("disabled", "");
    p.className = "button"
    p.innerHTML = `Start New Game`;
    startOver.appendChild(p);
    playgame = false;
    newGame();

}

function newGame() {
    const newgamebtn = document.querySelector(".button");
    newgamebtn.addEventListener("click", function () {
        randomNumber = parseInt((Math.random() * 100) + 1);
        preGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = "";
        remaining.innerHTML = `${11 - numGuess} `;
        userInput.removeAttribute("disabled")
        startOver.removeChild(p);
        playgame = true;
    })
}
