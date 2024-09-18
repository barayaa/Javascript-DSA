function mostChar(str) {
    const charMap = {}

    maxChar = ''
    maxCount = 0

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
            if (charMap[char] > maxCount) {
                maxCount = charMap[char]
                maxChar = char
            }
        } else {
            charMap[char] = 1
        }
    }

    return maxChar + ' : ' + maxCount
}

console.log(mostChar('moiiil'));
