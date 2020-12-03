const io = require('console-read-write');

const generateRandomNumber = {
    randomNumber: Math.round(Math.random() * 10 + 1)
};

const guessNumber = {
    __proto__: generateRandomNumber,
    guess(userNumber) {
        if (userNumber > this.randomNumber) {
            io.write('Your number is bigger than guessed. Try again');
        } else if (userNumber < this.randomNumber) {
            io.write('Your number is smaller than guessed. Try again');
            // eslint-disable-next-line eqeqeq
        } else if (userNumber == this.randomNumber) {
            io.write('You guessed right! Congratz!');
            return true;
        } else {
            io.write('This is not a number');
        }
        return false;
    }
};

const guessGame = {
    async main() {
        io.write('Try to guess number. Input yours: ');
        // eslint-disable-next-line no-plusplus
        for (this.attemptsCounter = 3; this.attemptsCounter > 0; --this.attemptsCounter) {
            // eslint-disable-next-line no-await-in-loop
            const number = await io.read();
            // eslint-disable-next-line radix
            if (guessNumber.guess(number)) break;
        }
        if (this.attemptsCounter === 0) {
            io.write('');
            io.write('');
            io.write('Amount of attempts is ended');
            io.write(`Guessed number is ${generateRandomNumber.randomNumber}`);
        }
    }
};

guessGame.main();
