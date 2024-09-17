function mostChar(str) {
    const charMap = {}

    maxChar = '';
    maxCount = 0;

    // for (const char of str) {
    //     charMap[char] = (charMap[char] || 0) + 1
    //     if (charMap[char] > maxCount) {
    //         maxCount = charMap[char]
    //         maxChar = char

    //     }
    // }

    for (char of str) {
        if (charMap[char]) {
            charMap[char] = charMap[char] + 1
        } else {
            charMap[char] = 1
        }


    }

    return charMap
}

console.log(mostChar('moiiii'));