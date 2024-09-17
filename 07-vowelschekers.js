function vowles(str) {
    const vowelsCheck = ['a', 'e', 'i', 'o', 'u']
    let count = 0;
    for (let char of str.toLowerCase()) {
        if (vowelsCheck.includes(char)) ++count;
    }

    return count;
}


function checkVowels2(str) {
    const match = str.match(/[aeiou]/gi)
    return match ? match.length : 0;
}