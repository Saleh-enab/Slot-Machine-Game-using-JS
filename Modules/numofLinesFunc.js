import promptSync from 'prompt-sync';
const prompt = promptSync();


export const EnteringLines = (max_lines) => {
    while (true) {
        const lines = prompt(`Enter the number of lines to bet on (1-${max_lines}): `);
        const numberOfLines = parseInt(lines);

        if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > max_lines) {
            console.log("Invalid number of lines. Please try again: ");
        }
        else {
            return numberOfLines;
        }
    }
}