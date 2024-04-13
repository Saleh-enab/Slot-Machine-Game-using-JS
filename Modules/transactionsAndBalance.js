import promptSync from 'prompt-sync';
const prompt = promptSync();


export const EnteringDeposit = () => {
    while (true) {
        const depositAmount = prompt("Enter the amount of money: ");
        const depositAmountNumber = parseFloat(depositAmount);

        if (isNaN(depositAmountNumber) || depositAmountNumber <= 0) {
            console.log("Invalid Amount of money, Please try again: ");
        }
        else {
            return depositAmountNumber;
        }
    }
}