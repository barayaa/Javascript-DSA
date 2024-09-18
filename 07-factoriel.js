// function factorialize(num) {
//     let iresult = 1
//     for (let i = 2; i <= num; i++) {
//         iresult *= i;
//         // console.log(iresult *= i);
//     }
//     return iresult;
// }

// factorialize(5);




//second methode 
function rfact(n) {
    if (n === 0 || n === 1) {
        return 1
    }
    return rfact(n - 1) * n;
}

let test = rfact(5)



