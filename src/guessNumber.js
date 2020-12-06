const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const randomNumber = {
    generatedRandomNumber: Math.round(Math.random() * 10 + 1),
};

function GuessNumber() {
    this.guess = function (userNumber) {
        switch (true) {
            case userNumber > this.generatedRandomNumber:
                console.log('Your number is bigger than guessed. Try again');
                break;
            case userNumber < this.generatedRandomNumber:
                console.log('Your number is smaller than guessed. Try again');
                break;
            case userNumber == this.generatedRandomNumber:
                console.log('You guessed right! Congratz!');
                return true;
            default:
                console.log('This is not a number');
                break;
        }
    };
}

GuessNumber.prototype = randomNumber;
let guessNumber = new GuessNumber();

const question = () => {
    return new Promise((resolve, reject) =>
        rl.question('Try to guess number. Input yours: ', (answer) =>
            resolve(answer)
        )
    );
};

const guessGame = async () => {
    for (let attemptsCounter = 3; attemptsCounter > 0; --attemptsCounter) {
        const number = await question();
        if (guessNumber.guess(number)) {
            rl.close();
            return;
        }
    }
    console.log('');
    console.log('');
    console.log('Amount of attempts is ended');
    console.log(`Guessed number is ${randomNumber.generatedRandomNumber}`);
    rl.close();
};

guessGame();
