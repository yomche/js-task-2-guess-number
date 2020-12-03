const io = require('console-read-write');

const generateRandomNumber = {
    randomNumber: Math.round(Math.random() * 10 + 1)
};

const guessNumber = {
//    __proto__: generateRandomNumber,
    guess(userNumber) {
        if (userNumber > this.randomNumber) {
            io.write('Your number is bigger than guessed. Try again');
        } else if (userNumber < this.randomNumber) {
            io.write('Your number is smaller than guessed. Try again');
        } else if (userNumber == this.randomNumber) {
            io.write('You guessed right! Congratz!');
            return true;
        } else {
            io.write('This is not a number');
        }
        return false;
    }
};
// назначает базовый объект generateRandomNumber как протитип для объекта guessNumber
Object.setPrototypeOf(guessNumber, generateRandomNumber);

const guessGame = {
    async main() {
        io.write('Try to guess number. Input yours: ');
        for (let attemptsCounter = 3; attemptsCounter > 0; --attemptsCounter) {
            // eslint-disable-next-line no-await-in-loop
            const number = await io.read();
            if (guessNumber.guess(number)) return;
        }
        io.write('');
        io.write('');
        io.write('Amount of attempts is ended');
        io.write(`Guessed number is ${generateRandomNumber.randomNumber}`);
    }
};

guessGame.main();
