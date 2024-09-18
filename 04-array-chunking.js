//Array chunks 
//first chunk method
function arrayChunk(arr, size) {
    let chunk = [];
    for (let i = 0; i < arr.length; i += size) {
        chunk.push(arr.slice(i, i + size));
    }

    return chunk;
}

// console.log(arrayChunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4));






// second chunk method

function arrayChunk2(arr, size) {
    let chunk = [];
    let index = 0
    // while (index < arr.length) {
    //     chunk.push(arr.slice(index, index + size));
    //     index += size;
    // }
    do {
        chunk.push(arr.slice(index, index + size));
        index += size;
    } while (index < arr.length);
    return chunk;

}

console.log('chunk 2 ', arrayChunk2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4));
