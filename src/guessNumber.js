const io = require('console-read-write');

const randomNumber = {
    generateRandomNumber: Math.round(Math.random() * 10 + 1),
};

const guessNumber = {
    guess(userNumber) {
        switch (true) {
            case userNumber > this.generateRandomNumber:
                io.write('Your number is bigger than guessed. Try again');
                break;
            case userNumber < this.generateRandomNumber:
                io.write('Your number is smaller than guessed. Try again');
                break;
            case userNumber == this.generateRandomNumber:
                io.write('You guessed right! Congratz!');
                return true;
            default:
                io.write('This is not a number');
                break;
        }
    },
};

Object.setPrototypeOf(guessNumber, randomNumber);

const guessGame = {
    async main() {
        io.write('Try to guess number. Input yours: ');
        for (let attemptsCounter = 3; attemptsCounter > 0; --attemptsCounter) {
            const number = await io.read();
            if (guessNumber.guess(number)) return;
        }
        io.write('');
        io.write('');
        io.write('Amount of attempts is ended');
        io.write(`Guessed number is ${randomNumber.generateRandomNumber}`);
    },
};

guessGame.main();
