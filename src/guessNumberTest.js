const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function RandomNumber() {
    this.number = Math.round(Math.random() * 10);
    this.getRandomNumber = function () {
        return this.number;
    };
}

function GuessedNumber() {
    this.input = async () => {
        return new Promise((resolve) => {
            rl.question('Input your number in the range from 0 to 10: ', (inputNumber) => {
                resolve(inputNumber);
            });
        });
    };
}

function CompareNumbers(RandomNumber, GuessedNumber) {
    this.randomNumber = RandomNumber;
    this.guessedNumber = GuessedNumber;
    this.compare = async function () {
        let generatedRandomNumber = this.randomNumber.getRandomNumber();
        let userNumber = await this.guessedNumber.input();
        
        if (userNumber > generatedRandomNumber) {
            console.log('Your number is bigger than guessed. Try again');
        } else if (userNumber < generatedRandomNumber) {
            console.log('Your number is smaller than guessed. Try again');
        } else if (userNumber == generatedRandomNumber) {
            return true;
        } else {
            console.log('This is not a number');
        }
        return false;
    };
}

function GuessGame(CompareNumbers) {
    this.compareNumbers = CompareNumbers;
    this.play = async function () {
        for (let i = 0; i < 3; ++i) {
            if (await this.compareNumbers.compare()) {
                console.log('You guessed right! Congrats');
                rl.close();
                return;
            }
        }
        console.log('');
        console.log('Amount of attempts is ended');
        console.log(`Guessed number is ${this.compareNumbers.randomNumber.getRandomNumber()}`);
        rl.close();
    };
}


new GuessGame(
    new CompareNumbers(
        new RandomNumber(), 
        new GuessedNumber()
    )
).play();
