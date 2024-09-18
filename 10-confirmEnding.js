// function confirmEnding(str, target) {
//     // strEndLetter = str.at(str.length - 1);
//     // return strEndLetter === target ? true : false;

//     return str.slice(str.length - target.length) === target
// }

// let test = confirmEnding("Bastian", "tian");
// console.log(test);


function repeatStringNumTimes(str, num) {
    let repeatStr = ''
    for (let i = 0; i < num; i++) {
        repeatStr += str;
    }
    return repeatStr;
}

console.log(repeatStringNumTimes("abc", 6));
