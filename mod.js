export function generateRandomChineseCharacter() {
    // Define the range of Unicode code points for Chinese characters
    const minCharCode = 0x4E00;
    const maxCharCode = 0x9FFF;

    // Generate a random integer within the range
    const randomCharCode = Math.floor(Math.random() * (maxCharCode - minCharCode + 1)) + minCharCode;

    // Convert the code point to a UTF-16 character string
    const charString = String.fromCodePoint(randomCharCode);

    // Return the random Chinese character
    return charString;
}
