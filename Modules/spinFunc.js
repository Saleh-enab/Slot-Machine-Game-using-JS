
export const spin = (ROWS, COLS, symbol_counts_obj) => {

    //Creating an array of all avalible symbols
    const allSymbols = [];
    for (const [symbol, count] of Object.entries(symbol_counts_obj)) {
        for (let i = 0; i < count; i++) {
            allSymbols.push(symbol);
        }
    }


    //creating the reels
    const reels = [];
    for (let i = 0; i < COLS; i++) {
        reels.push([]);
        const reelAvilableSymbols = [...allSymbols]
        for (let j = 0; j < ROWS; j++) {
            const randomIndex = Math.floor(Math.random() * reelAvilableSymbols.length)
            const selectedSymbol = reelAvilableSymbols[randomIndex]
            reels[i].push(selectedSymbol)
            reelAvilableSymbols.splice(randomIndex, 1)
        }
    }


    //transposing the reels
    const transposedReels = [];
    for (let i = 0; i < ROWS; i++) {
        transposedReels.push([]);
        for (let j = 0; j < COLS; j++) {
            transposedReels[i].push(reels[j][i]);
        }
    }


    //print the spinning result
    let resString = "";
    for (const row of transposedReels) {
        for (let i = 0; i < row.length; i++) {
            resString += row[i]
            if (i != row.length - 1) {
                resString += " | "
            }
        }
        resString += "\n"
    }


    return { finalString: resString, finalReels: transposedReels };
}
