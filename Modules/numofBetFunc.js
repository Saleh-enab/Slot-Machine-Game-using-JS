import promptSync from 'prompt-sync';
const prompt = promptSync();


export const EnteringBet = (balance, lines) => {
    while (true) {
        const bet = prompt("Enter the amount of bet per line: ");
        const numberOfBet = parseFloat(bet);

        if (isNaN(numberOfBet) || numberOfBet <= 0 || numberOfBet > balance / lines) {
            console.log("Invalid number of lines. Please try again: ");
        }
        else {
            return numberOfBet;
        }
    }
}