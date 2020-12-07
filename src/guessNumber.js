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

function question() {
    // определение промиса
    let promise = new Promise(function (resolve, reject) {
        // метод модуля readline
        rl.question('Try to guess number. Input yours: ', function (answer) {
            // состояние "resolved" - вызов функции resolve с переменной answer - результат успешного выполнения
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
