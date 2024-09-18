// function findLongestWordLength(str) {
//     let currenWordLength = 0;
//     let spltWord = str.split(' ');
//     for (let i = 0; i < spltWord.length; i++) {
//         if (spltWord[i].length > currenWordLength) {
//             currenWordLength = spltWord[i].length;
//         }

//     }

//     return currenWordLength;
// }

function findLongestWordLength(str) {
    return Math.max(...str.split(" ").map(word => word.length));
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));


