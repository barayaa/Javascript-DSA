// Given a string to reverse the string from 
// First method
function reverse1(str) {
    let reversed = ''
    for (let i = 0; i < str.length; i++) {
        reversed = str[i] + reversed
    }
    console.log(reversed);
    if (str === reversed) {
        return true
    }
    return false
    // return reversed
}
// Second method

function reverse2(str) {
    let reversed2 = ''

    for (char of str) {
        reversed2 = char + reversed2
    }

    return reversed2
}

// Third method
function reverse(str) {
    return str.split('').reverse().join('')
}
let test = reverse1('kayak')
console.log(test);





//reverNumber

function reverseNumber(num) {
    if (typeof num !== 'number') {
        return 'is not a number';
    }
    const numberReverse = num.toString().split('').reverse().join('');
    return parseInt(numberReverse) * Math.sign(num);
}

