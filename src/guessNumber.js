const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const randomNumber = {
    generatedRandomNumber: Math.round(Math.random() * 10),
};

function GuessNumber() {
    this.guess = function (userNumber) {
        if (userNumber > this.generatedRandomNumber) {
            console.log('Your number is bigger than guessed. Try again');
        } else if (userNumber < this.generatedRandomNumber) {
            console.log('Your number is smaller than guessed. Try again');
        } else if (userNumber == this.generatedRandomNumber) {
            console.log('You guessed right! Congratz!');
            return true;
        } else {
            console.log('This is not a number');
        }
    };
}

GuessNumber.prototype = randomNumber;
let guessNumber = new GuessNumber();

function question() {
    let promise = new Promise(function (resolve) {
        rl.question('Try to guess number. Input yours: ', function (answer) {
            resolve(answer);
        });
    });
    return promise;
}

async function guessGame() {
    for (let attemptsCounter = 3; attemptsCounter > 0; --attemptsCounter) {
        const number = await question();
        if (guessNumber.guess(number)) {
            rl.close();
            return;
        }
    }
    console.log('');
    console.log('Amount of attempts is ended');
    console.log(`Guessed number is ${randomNumber.generatedRandomNumber}`);
    rl.close();
}

guessGame();
