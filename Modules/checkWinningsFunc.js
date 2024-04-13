
let award = 0;

export const winOrLose = (lines, bet, symbol_values_obj, spinRes, currentlyBalance) => {

    for (let i = 0; i < lines; i++) {
        let win = true;
        let row = spinRes.finalReels[i]

        for (let j = 0; j < row.length; j++) {
            if (row[j] !== row[0]) {
                win = false;
                break;
            }
        }

        if (win) {
            award = bet * symbol_values_obj[row[0]];
            currentlyBalance += award;
            console.log(`You win $${award}\n`);
        }
        else {
            currentlyBalance -= bet;
            console.log(`You lose $${bet}\n`);
        }
    }

    return currentlyBalance;

}