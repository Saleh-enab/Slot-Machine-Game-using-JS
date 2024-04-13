import promptSync from 'prompt-sync';
const prompt = promptSync();

const symbol_counts_obj = {}
const symbol_values_obj = {}

const pattern = new RegExp("^[A-Z]$")

export const EnteringSymbolNumber = () => {
    const symbols = prompt("Enter how many symbol you want(1-9): ");
    const symbol_number = parseInt(symbols)
    while (true) {
        if (isNaN(symbol_number) || symbol_number <= 0 || symbol_number > 9) {
            console.log("Invalid number of symbols, Please try again.")
        }
        else {
            return symbol_number;
        }
    }
}


export const GetSymbolValues = (symbol_number) => {
    while (Object.keys(symbol_values_obj).length < symbol_number) {
        const symbol = prompt("Enter the an UpperCase symbol (A-Z): ");

        while (true) {
            if (pattern.test(symbol) === true) {
                const counts = prompt(`Enter the symbol [${symbol}] counts: `)
                symbol_counts_obj[symbol] = counts;
                const value = prompt(`Enter the symbol [${symbol}] Value: `)
                symbol_values_obj[symbol] = value;
                console.log("\n")
                break;
            }
            else {
                console.log("Invalid symbol, Please try again: ");
                break;
            }
        }
    }

    return { counts: symbol_counts_obj, values: symbol_values_obj }
}