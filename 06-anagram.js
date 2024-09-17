function charMap(str) {
    const charmap = {}
    str = str.toLowerCase().replace(/[\W]/g, '');
    for (let char of str) {
        charmap[char] = ++charmap[char] || 1
    }

    return charmap
}


function anagrams(stringA, stringB) {
    const charMapA = charMap(stringA);
    const charMapB = charMap(stringB);

    if (Object.keys(charMapA).length === charMapB.length) return true

    for (let key in charMapA) {
        if (charMapA[key] !== charMapB[key]) return false
    }

    return true
}


console.log(anagrams('ABDOUL WAHAB', 'abdoulwahas'));
console.log(anagrams('coding money', 'money coding'));