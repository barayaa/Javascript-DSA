// function largestOfFour(arr) {
//     let newArrofLargestnum = [];

//     for (let i = 0; i < arr.length; i++) {
//         let largestNumofArr = arr[i][0];
//         arr[i].map((el) => {
//             if (el > largestNumofArr) {
//                 largestNumofArr = el;
//             }
//         })

//         newArrofLargestnum.push(largestNumofArr);


//     }
//     return newArrofLargestnum;
// }


function largestOfFour(arr) {
    let newArrofLargestnum = [];

    let currentVal;
    for (let i = 0; i < arr.length; i++) {
        // console.log(arr[i]);
        let largestNumofArr = arr[i][0];
        for (let j = 0; j < arr[i].length; j++) {
            currentVal = arr[i][j];
            if (currentVal > largestNumofArr) {
                largestNumofArr = currentVal;
            }
        }
        newArrofLargestnum = largestNumofArr;
        // newArrofLargestnum.push(largestNumofArr);
        console.log(newArrofLargestnum);

    }

    return newArrofLargestnum;





}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);