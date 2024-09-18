// write a function to accpet a string and return the first letter in capitalized

function capitalize(str) {
    let txt = str.split(' ');

    let result = []

    for (let word of txt) {
        result.push(word[0].toUpperCase() + word.slice(1, word.length))
    }

    return result.join(' ')
}

console.log(capitalize('abdoulwahasb explode lorem'));

//Secon methode
function capitalize2(str) {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
}

//  console.log(capitalize("hello world"));

//third solution 


function capitalize3(str) {
    let words = str.split(' ');
    return words.map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
}

console.log(capitalize3("hello world"));


