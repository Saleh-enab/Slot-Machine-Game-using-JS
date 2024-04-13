import promptSync from 'prompt-sync';
const prompt = promptSync();

import { EnteringSymbolNumber, GetSymbolValues } from "./Modules/symbolsAndValues.js";
import { createReels } from './Modules/creatingReelsFunc.js';
import { EnteringDeposit } from "./Modules/transactionsAndBalance.js";
import { EnteringLines } from "./Modules/numofLinesFunc.js";
import { EnteringBet } from "./Modules/numofBetFunc.js";
import { spin } from './Modules/spinFunc.js';
import { winOrLose } from './Modules/checkWinningsFunc.js';


//Getting player name
const name = prompt("Enter your name please: ")
function printDecoration(text) {
    const borderLength = text.length + 12;
    const decoration = "*".repeat(borderLength);
    console.log("\n" + decoration);
    console.log(`***** ${text} *****`);
    console.log(decoration + "\n");
}
printDecoration(`Welcome to my game ${name}`);


//Setting up the game
const symbol_number = EnteringSymbolNumber();
console.log("Entering the symbol counts and values...")
export const symbol_obj = GetSymbolValues(symbol_number);

const game_size = createReels();

// Start to play
let intial_balance = EnteringDeposit();
console.log(`Your currently balance is: $${intial_balance}\n`);

let player_state = "y";
let player_balance = intial_balance;

while (true) {
    if (player_state === "n" || player_balance <= 0) {
        console.log("Game over!");
        break;
    }
    else {
        const lines = EnteringLines(game_size.rows);
        console.log(`Number of lines you choose is: ${lines}\n`);
        const bet = EnteringBet(player_balance, lines);
        console.log(`Your bet is $${bet} per line.\n`);

        //spinning the reels
        const spinRes = spin(game_size.rows, game_size.columns, symbol_obj.counts);
        console.log(spinRes.finalString);

        //update balance based on game state
        player_balance = winOrLose(lines, bet, symbol_obj.values, spinRes, player_balance);
        console.log(`Your balance now is $${player_balance}\n`)
    }

    player_state = prompt(`Your currently balance is $${player_balance}, Do you want to play again (y/n)?`)
}