
function charMap(str) {
    let charMap = {};
    str = str.toLowerCase().replace(/[\W]/g, '');
    for (let char of str) {
        charMap[char] = ++charMap[char] || 1;
    }
    return charMap;
}


function anagrams(stringA, stringB) {
    const charMapA = charMap(stringA);
    const charMapB = charMap(stringB);

    if (Object.keys(charMapA).length !== Object.keys(charMapB).length) return false



    return charMapA
}

console.log(anagrams('lo remmd dnsod'));


// 92714326