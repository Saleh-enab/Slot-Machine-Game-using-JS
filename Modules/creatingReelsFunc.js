import promptSync from 'prompt-sync';
const prompt = promptSync();

import { GetSymbolValues } from './symbolsAndValues.js';

const symbol_obj = GetSymbolValues();

const symbol_counts_obj = symbol_obj.counts;

export const createReels = () => {

    //Creating an array of all avalible symbols
    const allSymbols = [];
    for (const [symbol, count] of Object.entries(symbol_counts_obj)) {
        for (let i = 0; i < count; i++) {
            allSymbols.push(symbol);
        }
    }

    const allSymbolsCount = allSymbols.length

    //Getting number of Columns from the player
    let COLS;
    const maxCols = Math.floor(allSymbolsCount / 3);
    while (true) {
        const enteredColumns = prompt(`Enter number of columns for reels (3-${maxCols}): `)
        if (Math.floor(allSymbolsCount / enteredColumns) >= 3 && enteredColumns >= 3) {
            COLS = enteredColumns;
            break;
        }
        else {
            console.log(`Invalid number of columns, Please try again.`)
        }
    }


    //Getting number of Rows from the player
    let ROWS;
    const maxRows = Math.floor(allSymbolsCount / COLS);
    while (true) {
        const enteredRows = prompt(`Enter number of rows for reel (3-${maxRows}): `)
        if (enteredRows <= maxRows) {
            ROWS = enteredRows;
            break;
        }
        else {
            console.log("Invalid number of rows, Please try again.")
        }
    }

    return { columns: COLS, rows: ROWS }
}
